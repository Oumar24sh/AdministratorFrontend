import React from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import CommonSpaces from "~/components/CommonSpaces";


export let loader: LoaderFunction = async ({request}) => {
    const url = new URL(request.url);
    const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
    const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
    const ref: string = url?.searchParams?.get("ref") || "";
    const commonSpaceTypeName: string =
        url?.searchParams?.get("commonSpaceTypeName") || "";
    return api.commonSpace.apiCommonSpaceAfmGet({
        pageSize,
        pageNumber,
        ref,
        commonSpaceTypeName,
    });
};

export default function AfmCommonSpaces() {
    const commonSpaces = useLoaderData();

    return (
       <CommonSpaces commonSpaces={commonSpaces}/>
    );
}
