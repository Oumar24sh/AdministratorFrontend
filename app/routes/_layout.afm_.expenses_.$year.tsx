import PageWithBack from "~/components/PageWithBack";
import {useLoaderData, useParams} from "@remix-run/react";
import Expenses from "~/components/Expenses";
import React from "react";
import {LoaderFunction} from "@remix-run/server-runtime";
import {api} from "~/http";

export let loader: LoaderFunction = async ({ request,params }) => {
    const url = new URL(request.url);
    const {year}:any = params;
    return api.expenses.apiExpensesAfmYearGet({year});
};
export default function ExpensesYear (){
    const expenses: any = useLoaderData();
    const {year} = useParams();
    return <PageWithBack title={`Expenses for ${year}`}><Expenses expenses={expenses} /></PageWithBack>
}