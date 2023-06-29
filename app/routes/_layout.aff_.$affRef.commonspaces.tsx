import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import CommonSpaces from "~/components/CommonSpaces";
import React from "react";

export let loader: LoaderFunction = async ({ request, params }) => {
  const { affRef }: any = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  const ref: string = url?.searchParams?.get("ref") || "";
  const commonSpaceTypeName: string =
    url?.searchParams?.get("commonSpaceTypeName") || "";
  return api.commonSpace.apiCommonSpaceAffAffRefGet({
    pageSize,
    pageNumber,
    ref,
    commonSpaceTypeName,
    affRef,
  });
};
export default function AfmCommonSpaces() {
  const commonSpaces = useLoaderData();

  return <CommonSpaces commonSpaces={commonSpaces} />;
}
 