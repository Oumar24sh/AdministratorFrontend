import * as React from "react";
import type { MetaFunction, LoaderFunction } from "@remix-run/server-runtime";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import authenticator from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { api } from "~/http";
import { ClientOnly } from "remix-utils";
import ChartClient from "~/components/Charts/_.client";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Administrator's App",
    description: "Beau Plan Administrator's App",
  };
};
export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const response = await api.dashboard.apiDashboardGet();
  return json<any>({ ...response });
};

// https://remix.run/guides/routing#index-routes
export default function Dashboard() {
  const data = useLoaderData();
  const { affData } = data;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <ClientOnly
            fallback={
              <div
                id="skeleton"
                style={{ height: 400, background: "#d1d1d1" }}
              />
            }
          >
            {() => (
              <Card
                style={{
                  height: 400,
                  width: "100%",
                }}
              >
                <CardHeader
                  sx={{ textAlign: "center" }}
                  title={
                    <Typography style={{ fontSize: "1.2rem !important" }}>
                      % Tantièmes AFM Votes
                    </Typography>
                  }
                />
                <Divider />
                <Box
                  sx={{
                    height: "calc(100% - 64px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChartClient
                    data={affData}
                    seriesName={"tantiemesAFMVotes"}
                  />
                </Box>
              </Card>
            )}
          </ClientOnly>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ClientOnly
            fallback={
              <div
                id="skeleton"
                style={{ height: 400, background: "#d1d1d1" }}
              />
            }
          >
            {() => (
              <Card
                style={{
                  height: 400,
                  width: "100%",
                }}
              >
                <CardHeader
                  sx={{ textAlign: "center" }}
                  title={
                    <Typography style={{ fontSize: "1.2rem !important" }}>
                      % Tantièmes AFM Charges
                    </Typography>
                  }
                />
                <Divider />
                <Box
                  sx={{
                    height: "calc(100% - 64px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChartClient
                    data={affData}
                    seriesName={"tantiemesAFMCharges"}
                  />
                </Box>
              </Card>
            )}
          </ClientOnly>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ClientOnly
            fallback={
              <div style={{ height: 400, background: "#d1d1d1" }}>
                <Skeleton
                  variant="rectangular"
                  width={"%100"}
                  height={"100%"}
                />
              </div>
            }
          >
            {() => (
              <Card
                style={{
                  height: 400,
                  width: "100%",
                }}
              >
                <CardHeader
                  sx={{ textAlign: "center" }}
                  title={
                    <Typography style={{ fontSize: "1.2rem !important" }}>
                      % Surface Ponderée
                    </Typography>
                  }
                />
                <Divider />
                <Box
                  sx={{
                    height: "calc(100% - 64px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChartClient data={affData} seriesName={"weightedArea"} />
                </Box>
              </Card>
            )}
          </ClientOnly>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
