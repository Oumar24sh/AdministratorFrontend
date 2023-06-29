import {
  useLoaderData,
} from "@remix-run/react";
import React from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import Plots from "~/components/Plots";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  const ref: string = url.searchParams.get("ref") || "";
  const use: string = url.searchParams.get("plotDestination") || "";
  const status: string = url.searchParams.get("plotStatusName") || "";
  return api.plot.apiPlotGet({ pageSize, pageNumber, ref, use, status });
};
export default function AllPlots() {
  const plots = useLoaderData();
  return <Plots plots={plots}/>;
}
