import React from "react";
import { json, LoaderArgs } from "@remix-run/server-runtime";

import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import authenticator from "~/utils/auth.server";
import { getSession } from "~/utils/session.server";
import { useLoaderData } from "@remix-run/react";
import Logo from "~/assets/logo.svg";

export async function loader({ request }: LoaderArgs) {
    await authenticator.isAuthenticated(request, {
        successRedirect: "/",
    });
    const session = await getSession(request.headers.get("Cookie"));

    const error = session.get("sessionErrorKey");
    return json<any>({ error });
}
 
export async function action({ request, context }) {
    return authenticator.authenticate("form", request, {
        successRedirect: "/",
        failureRedirect: "/login",
        throwOnError: true,
        context,
    });
}

export default function AuthLogin() {
    const loaderData = useLoaderData();
    return (
        <Card
            sx={{
                minHeight: 450,
                minWidth: { xs: 300, md: 250 },
                maxWidth: { xs: 300, md: 400 },
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
            }}
        >
            <CardHeader
                title={
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 80,
                                mb: "10px",
                            }}
                            alt="Beau Plan Logo"
                            src={Logo}
                        />
                        <Typography variant={"h5"} fontWeight={500}>
                            Log Into Your Account
                        </Typography>
                    </Box>
                }
                action={null}
                sx={{ px: { md: 5, xs: 3 }, pt: 5, pb: "10px" }}
            />
            <CardContent sx={{ px: { md: 5, xs: 3 } }}>
                <form method="post">
                    <Grid container spacing={4}>
                        {loaderData?.error && (
                            <Grid item xs={12} sm={12} md={12} sx={{ pb: "10px !important" }}>
                                <Alert severity="error">{loaderData?.error?.message}</Alert>
                            </Grid>
                        )}
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            sx={{ paddingTop: loaderData?.error ? "16px !important" : "" }}
                        >
                            <TextField
                                required
                                label="Username"
                                fullWidth
                                focused
                                name="username"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box sx={{ position: "relative" }}>
                                <TextField
                                    required
                                    label="Password"
                                    fullWidth
                                    type={"password"}
                                    focused
                                    name="password"
                                />
                                <Link sx={{ float: "right", fontSize: 12, cursor: "pointer" }}>
                                    Forgot your password?
                                </Link>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            sx={{ paddingTop: "32px !important" }}
                        >
                            <Button
                                disableElevation={false}
                                type="submit"
                                variant={"contained"}
                                size={"large"}
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}
