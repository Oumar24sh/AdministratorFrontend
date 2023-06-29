import React from "react";
import { api } from "~/http";
import { LoaderFunction } from "@remix-run/server-runtime";
import {
    useLoaderData,
} from "@remix-run/react";
import CommonSpaces from "~/components/CommonSpaces";

export let loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
    const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
    const ref: string = url.searchParams.get("ref") || "";
    const commonSpaceTypeName: string =
        url.searchParams.get("commonSpaceTypeName") || "";
    return api.commonSpace.apiCommonSpaceAffGet({
        pageSize,
        pageNumber,
        ref,
        commonSpaceTypeName,
    });
};

export default function AllAffCommonSpaces() {
    const commonSpaces = useLoaderData();
    return (
        <CommonSpaces showAffRef={true} commonSpaces={commonSpaces}/>
    );
}
