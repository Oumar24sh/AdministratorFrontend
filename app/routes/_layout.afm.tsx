import React from "react";
import Page from "~/components/Page";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import authenticator from "~/utils/auth.server";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router";


export async function loader({ request }: LoaderArgs) {
    const authentication = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    });

    return json<any>({ ...authentication });
}

export default function AfmLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <Page title={"Association Foncière Mère"}>
            <AppBar position="static">
                <Tabs
                    value={pathname}
                    indicatorColor="primary"
                    aria-label="full width tabs example"
                    sx={{ pb: "16px" }}
                >
                    <Tab
                        value={"/afm/expenses"}
                        label="Expenses"
                        onClick={() => navigate("/afm")}
                    />
                    <Tab
                        value={"/afm/commonspaces"}
                        label="Common Spaces"
                        onClick={() => navigate("/afm/commonspaces")}
                    />
                </Tabs>
            </AppBar>
            <Outlet />
        </Page>
    );
}
