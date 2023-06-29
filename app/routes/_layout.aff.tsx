import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import { Outlet, useLocation } from "@remix-run/react";
import Page from "~/components/Page";
import { useNavigate } from "react-router";

export default function AffTabs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Page title={"Association Foncière Filles"}>
      <Tabs
        value={pathname}
        indicatorColor="primary"
        aria-label="full width tabs example"
        sx={{ pb: "16px" }}
      >
        <Tab value={"/aff"} label="Summary" onClick={() => navigate("/aff")} />
        <Tab
          value={"/aff/plots"}
          label="All Plots"
          onClick={() => navigate("/aff/plots")}
        />
        <Tab
          value={"/aff/commonspaces"}
          label="All Common Spaces"
          onClick={() => navigate("/aff/commonspaces")}
        />
      </Tabs>
      <Outlet />
    </Page>
  );
}
