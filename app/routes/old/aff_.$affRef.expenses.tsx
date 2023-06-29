import { LoaderArgs, redirect } from "@remix-run/server-runtime";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import { CustomFooterTotalComponent } from "~/components/Expenses/ExpenseFooter";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import React from "react";
import { useLoaderData } from "@remix-run/react";
import { useNavigate } from "react-router";
import { ExpenseValue } from "~/components/Expenses/ExpenseValue";
import { Box, Button } from "@mui/material";
import { MdDownload, MdOutlineAdd } from "react-icons/md";

export async function loader({ request,params }: LoaderArgs) {
    const {affRef} = params
    return {};
}
export default function affRefExpenses() {
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
          <Button
            onClick={() => navigate("/afm/expenses/add")}
            startIcon={<MdOutlineAdd />}
            size={"small"}
          >
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
        rows={expenses?.data || []}
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
