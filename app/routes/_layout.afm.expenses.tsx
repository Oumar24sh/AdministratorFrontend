import React from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import Expenses from "~/components/Expenses";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  return api.expenses.apiExpensesAfmGet();
};

export default function AfmExpenses() {
  const expenses: any = useLoaderData();
  return <Expenses expenses={expenses} />;
}
