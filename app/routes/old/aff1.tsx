import React from "react";
import Page from "~/components/Page";
import { Tab, Tabs } from "@mui/material";
import { Outlet, useLocation } from "@remix-run/react";
import { useNavigate } from "react-router";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import authenticator from "~/utils/auth.server";

export async function loader({ request }: LoaderArgs) {
  const authentication = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return authentication ? json<any>({ ...authentication }) : null;
}

export default function aff() {
  const { pathname } = useLocation();

  const navigate = useNavigate(); 
  return (
    <Page title={"Association Foncière Filles"}>
      {/*<AppBar>*/}
      <Tabs
        value={pathname}
        indicatorColor="primary"
        // textColor="inherit"
        // variant="fullWidth"
        aria-label="full width tabs example"
        sx={{ pb: "16px" }}
      >
        <Tab value={"/aff"} label="Summary" onClick={() => navigate("/aff")} />
        <Tab
          value={"/aff/plots"}
          label="All Plots"
          onClick={() => navigate("/aff/plots")}
        />
        {/*<Tab*/}
        {/*  value={"/aff/expenses"}*/}
        {/*  label="All Expenses"*/}
        {/*  onClick={() => navigate("/aff/expenses")}*/}
        {/*/>*/}
        <Tab
          value={"/aff/commonspaces"}
          label="All Common Spaces"
          onClick={() => navigate("/aff/commonspaces")}
        />
      </Tabs>
      {/*</AppBar>*/ }
      <Outlet />
    </Page>
  );
}
