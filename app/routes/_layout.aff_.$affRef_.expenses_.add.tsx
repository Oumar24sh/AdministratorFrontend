import React from "react";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData, useParams } from "@remix-run/react";
import ExpenseAdd from "~/components/Expenses/Add";
import { ActionArgs } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { validator } from "~/schema/expense";
import {
  commitSession,
  getSession,
  setToastMessage,
} from "~/utils/session.server";
import { affNames } from "~/utils/enum";
import dayjs from "dayjs";

export let loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const { affRef } = params;
  const expenses = await api.expenses.apiExpensesAffAffRefGet({ affRef });
  let expensesList: any = await api.expenses.apiExpensesGet();
  expensesList = expensesList.map((item) => ({
    label: item.displayName,
    id: item.id,
  }));
  return json<any>({ expenses, expensesList });
};

export const action: ActionFunction = async ({
  request,
  params,
}: ActionArgs) => {
  try {
    const { affRef } = params;
    const session = await getSession(request.headers.get("Cookie"));
    const response = await validator.validate(await request.formData());
    if (response.error) return validationError(response.error);
    const body: any = {
      affRef,
      expensesItemBody: {
        expenses: response.data.expenses,
        yearStart: new Date(dayjs(response?.data?.yearStart,'MM-YYYY').toString()),
        yearEnd: new Date(dayjs(response?.data?.yearEnd,'MM-YYYY').toString()),
      },
    };
    await api.expenses.apiExpensesAffAffRefPost(body);

    const message = {
      options: { variant: "success" },
      message: affRef
        ? `Expense for ${affNames[affRef]} added successfully.`
        : `Expense for ${affNames["afm"]} added successfully.`,
    };
    setToastMessage(session, message);
    const redirectTo = affRef ? `/aff/${affRef}/expenses` : "/afm/expenses";
    return redirect(redirectTo, {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  } catch (e) {
    if (e?.response) {
      console.log(e);
      return e.response;
    } else {
      return { error: true };
    }
  }
};

export default function AffExpenseAdd() {
  const data: any = useLoaderData();
  const { affRef } = useParams();

  const { expenses, expensesList } = data;
  return (
    <ExpenseAdd
      title={`New Expense for ${affNames[affRef]}`}
      expenses={expenses}
      expensesList={expensesList}
      affRef={affRef}
    />
  );
}
