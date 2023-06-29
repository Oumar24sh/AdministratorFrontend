import React from "react";
import { redirect } from "@remix-run/server-runtime";
export async function loader() {

  return redirect("/afm/expenses");
}

