import Page from "~/components/Page";
import CustomDataGrid from "~/components/CustomDataGrid";
import React from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import {useLoaderData} from "@remix-run/react";
import {GridColDef} from "@mui/x-data-grid-pro";
import PageWithBack from "~/components/PageWithBack";


export let loader: LoaderFunction = async ({ request, params }) => {
  const { plotRef }: any = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  // return []
  return await api.coproperty.apiCopropertyPlotRefGet({
    plotRef,
    pageSize,
    pageNumber,
  });
};

export default function Coproperty() {
  const coproperty = useLoaderData();
  const columns: GridColDef[] = [
    {
      field: "ref",
      headerName: "Ref",
      valueFormatter: (params) => params?.value?.toUpperCase(),
      // flex: 1,
      minWidth: 150,
    },
    // {
    //   field: "gisArea",
    //   headerName: "GIS Area (m²)",
    //   type: "number",
    //   filterable: false,
    //   flex: 1,
    //   minWidth: 200,
    //   valueFormatter: (params) => Math.round(params?.value),
    // },
    {
      field: "levy",
      headerName: "Levy",
      type: "number",
      filterable: false,
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
  ];

  return (
    <PageWithBack title={"Copropriétés"}>
      <CustomDataGrid
          // rows={changeRequests}
          source={coproperty}
          getRowId={(row) => row.id}
          columns={columns}
          paginate
      />
    </PageWithBack>
  );
}
