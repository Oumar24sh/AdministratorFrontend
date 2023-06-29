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
    useLoaderData, useParams,
    useSubmit,
} from "@remix-run/react";
import {
    Autocomplete,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import { MdClose, MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useFormik, FieldArray, Formik, useFormikContext } from "formik";
import ExpenseAdd from "~/components/Expenses/Add";
import { ActionArgs } from "@remix-run/node";
import { getFormData } from "~/utils/request.server";
import { makeDomainFunction } from "domain-functions";
import { formAction } from "~/utils/form-action.server";
import { validationError } from "remix-validated-form";
import { validator } from "~/schema/expense";
import {
    commitSession,
    getSession,
    setToastMessage,
} from "~/utils/session.server";
import {affNames} from "~/utils/enum";

export let loader: LoaderFunction = async ({ request,params }) => {
    const url = new URL(request.url);
    const {affRef} = params
    const expenses = await api.expenses.apiExpensesAffAffRefGet({affRef})
    let expensesList: any = await api.expenses.apiExpensesGet();
    expensesList = expensesList.map((item) => ({
        label: item.displayName,
        id: item.id,
    }));
    return json<any>({ expenses, expensesList });
};

export const action: ActionFunction = async ({ request,params }: ActionArgs) => {
    try {
        const {affRef} = params
        const session = await getSession(request.headers.get("Cookie"));
        const response = await validator.validate(await request.formData());
        if (response.error) return validationError(response.error);
        const body: any = {
            affRef,
            expensesItemBody: {
                expenses: response.data.expenses,
                expenseConfigName: response.data.expenseConfigName,
            },
        };
        await api.expenses.apiExpensesAffAffRefPost(body);

        const message = {
            options: { variant: "success" },
            message: affRef?`Expense for ${affNames[affRef]} added successfully.`:`Expense for ${affNames['afm']} added successfully.`,
        };
        setToastMessage(session, message);
        const redirectTo = affRef? `/aff/${affRef}/expenses`:"/afm/expenses"
        return redirect(redirectTo, {
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
