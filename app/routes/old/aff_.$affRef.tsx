import Page from "~/components/Page";
import axios from "axios";
import api from "~/api";
import { Outlet, useLocation, useParams } from "@remix-run/react";
import { affNames } from "~/utils/enum";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import FormPage from "~/components/PageWithBack";

export async function loader() {
  try {
    const response = await axios.get(api.GetAffSummary);
    return response?.data || [];
  } catch (err) {
    console.error(err);
    // redirect("/");
    return {};
  }
}

export default function affPage() {
  const { affRef } = useParams();
  const { pathname } = useLocation();

  const navigate = useNavigate();
  return (
    <FormPage
      title={
        (affNames[affRef] &&
          `${affNames[affRef]} (${affRef?.toUpperCase()})`) ||
        affRef
      }
    >
      <Tabs
        value={pathname}
        indicatorColor="primary"
        // textColor="inherit"
        // variant="fullWidth"
        aria-label="full width tabs example"
        sx={{ pb: "16px" }}
      >
        <Tab
          value={`/aff/${affRef}/plots`}
          label="Plots"
          onClick={() => navigate(`/aff/${affRef}/plots`)}
        />
        <Tab
          value={`/aff/${affRef}/expenses`}
          label="Expenses"
          onClick={() => navigate(`/aff/${affRef}/expenses`)}
        />
        <Tab
          value={`/aff/${affRef}/commonspaces`}
          label="Common Spaces"
          onClick={() => navigate(`/aff/${affRef}/commonspaces`)}
        />
      </Tabs>
      <Outlet />
    </FormPage>
  );
}
