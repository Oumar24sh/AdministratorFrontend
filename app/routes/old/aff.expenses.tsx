import React from "react";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import {LoaderFunction} from "@remix-run/server-runtime";
import {api} from "~/http";
import {useLoaderData} from "@remix-run/react";


export let loader: LoaderFunction = async ({ request }) => {
  // const { pageSize, page: pageNumber } = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  // const ref: string = url.searchParams.get("ref") || ""
  // const use: string = url.searchParams.get("plotDestination") || ""
  // const status: string = url.searchParams.get("plotStatusName") || ""
  return await api.summary.apiSummaryGet();
};
export default function affExpenses() {
  const expenses = useLoaderData();

  const columns: GridColDef[] = [
    {
      field: "expenseDisplayName",
      headerName: "Expense Name",
      flex: 1,
    },
    {
      field: "expenseUnitDisplayName",
      headerName: "Unit",
      flex: 1,
    },
    {
      field: "multiplierName",
      headerName: "Multiplier",
      flex: 1,
      valueFormatter: (params) => params?.value || "N/A",
    },
    {
      field: "derivedMultiplier",
      headerName: "Multiplier Value",
      type: "number",
      flex: 1,
      valueFormatter: (params) =>
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "N/A",
    },
    {
      field: "rate",
      headerName: "Rate",
      type: "number",
      flex: 1,
      // valueFormatter: (params) => params.value || "N/A",
    },
    {
      field: "derivedValue",
      headerName: "Value (MUR)",
      type: "number",
      flex: 1,
      valueFormatter: (params) => Math.round(params.value).toLocaleString(),
      // valueFormatter: (params) => params.value || "N/A",
    },
  ];

  return (
    <div style={{ width: "100%", height: 500 }}>
      <DataGridPro
        columns={columns}
        rows={[]}
        autoPageSize
        density={"compact"}
        getRowId={(row) => row.ref}
        initialState={{
          pinnedColumns: { left: ["ref", "commonSpaceTypeName"] },
        }}
      />
    </div>
  );
}
