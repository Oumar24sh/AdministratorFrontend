import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import Plots from "~/components/Plots";
import React from "react";

export let loader: LoaderFunction = async ({ request, params }) => {
  const { affRef }: any = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  const ref: string = url.searchParams.get("ref") || "";
  const use: string = url.searchParams.get("plotDestination") || "";
  const status: string = url.searchParams.get("plotStatusName") || "";
  return await api.plot.apiPlotAffAffRefGet({
    affRef,
    pageSize,
    pageNumber,
    ref,
    use,
    status,
  });
};
export default function AffPlots() {
  const plots = useLoaderData();
  return <Plots plots={plots} />;
}
