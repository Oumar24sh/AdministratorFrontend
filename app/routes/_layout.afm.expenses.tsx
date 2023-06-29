import React from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/ExpensesList";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  return api.expenses.apiExpensesListAfmGet();
};
export default function AfmExpenses() {
  const expenses: any = useLoaderData();
  return <ExpensesList expenses={expenses} />;
}
