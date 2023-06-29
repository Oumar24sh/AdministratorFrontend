import {LoaderFunction} from "@remix-run/server-runtime";
import {api} from "~/http";
import {useLoaderData, useParams} from "@remix-run/react";
import Expenses from "~/components/Expenses";
import React from "react";

export let loader: LoaderFunction = async ({ request,params }) => {
    const {affRef,year}:any = params
    return api.expenses.apiExpensesAffAffRefYearGet({affRef,year});
};
export default function AffExpenseYear() {
    const expenses: any = useLoaderData();
    const { affRef } = useParams();
    return "HI";
}