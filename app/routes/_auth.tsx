import { Box } from "@mui/material";
import { Outlet } from "@remix-run/react";
import {LoaderArgs, redirect} from "@remix-run/server-runtime";
export default function AuthLayout() {

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            className={"background-pattern"}
        >
            <Outlet />
        </Box>
    );
}
