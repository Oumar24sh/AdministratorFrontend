import React from "react";
import { DataGridPro, GridColDef, GridToolbar } from "@mui/x-data-grid-pro";
import { Box, Button } from "@mui/material";
import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import { CustomFooterTotalComponent } from "~/components/Expenses/ExpenseFooter";
import { ExpenseValue } from "~/components/Expenses/ExpenseValue";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import {MdDownload, MdOutlineAdd} from "react-icons/md";
import {useNavigate} from "react-router";

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  // const ref: string = url.searchParams.get("ref") || ""
  // const use: string = url.searchParams.get("plotDestination") || ""
  // const status: string = url.searchParams.get("plotStatusName") || ""
  return await api.expenses.apiExpensesAfmGet();
};
export default function afmExpenses() {
  const expenses: any = useLoaderData();
  const navigate = useNavigate();

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
      field: "rate",
      headerName: "Rate",
      type: "number",
      flex: 1,
      renderCell: (params) => <ExpenseValue params={params} />,
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
  const slots: any = {
    footer: { total: Math.round(expenses?.totalAmount).toLocaleString() },
    toolbar: {
      extra: (
        <Box>
          <Button onClick={()=>navigate("/afm/expenses/add")} startIcon={<MdOutlineAdd />} size={"small"}>
            New Expense
          </Button>
          <Button disabled startIcon={<MdDownload />} size={"small"}>
            Export
          </Button>
        </Box>
      ),
    },
  };
  return (
    <div style={{ width: "100%", height: 500 }}>
      <DataGridPro
        columns={columns}
        rows={expenses?.data}
        autoPageSize
        density={"compact"}
        slots={{
          footer: CustomFooterTotalComponent,
          toolbar: CustomToolbar,
        }}
        slotProps={slots}
        getRowId={(row) => row.id}
        initialState={{
          pinnedColumns: { left: ["ref", "commonSpaceTypeName"] },
        }}
      />
    </div>
  );
}
