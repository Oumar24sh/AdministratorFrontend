import React, { useState } from "react";
import FormPage from "~/components/PageWithBack";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import { api } from "~/http";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";

import ExpenseAdd from "~/components/Expenses/Add";
import { ActionArgs } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { validator } from "~/schema/expense";
import {
  commitSession,
  getSession,
  setToastMessage,
} from "~/utils/session.server";
import {affNames} from "~/utils/enum";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const expenses = await api.expenses.apiExpensesAfmGet();
  let expensesList: any = await api.expenses.apiExpensesGet();
  expensesList = expensesList.map((item) => ({
    label: item.displayName,
    id: item.id,
  }));
  return json<any>({ expenses, expensesList });
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const session = await getSession(request.headers.get("Cookie"));
    const response = await validator.validate(await request.formData());
    if (response.error) return validationError(response.error);
    const body: any = {
      expensesItemBody: {
        expenses: response.data.expenses,
        expenseConfigName: response.data.expenseConfigName,
      },
    };
    await api.expenses.apiExpensesAfmPost(body);
    const message = {
      options: { variant: "success" },
      message: `AFM expenses added successfully`,
    };
    setToastMessage(session, message);

    return redirect("/afm/expenses", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  } catch (e) {
    if (e?.response) {
      return e.response;
    } else {
      return { error: true };
    }
  }
};

export default function AfmExpenseAdd() {
  const data: any = useLoaderData();
  const response = useActionData<typeof action>();

  const { expenses, expensesList } = data;
  return (
    <ExpenseAdd
      title={`New Expense for ${affNames['afm']}`}
      expenses={expenses}
      expensesList={expensesList}
    />
  );
}
