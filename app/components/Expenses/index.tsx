import React, { FunctionComponent } from "react";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import { ExpenseValue } from "~/components/Expenses/ExpenseValue";
import { useNavigate } from "react-router";
import { Box, Button } from "@mui/material";
import { MdDownload, MdOutlineAdd } from "react-icons/md";
import { CustomFooterTotalComponent } from "~/components/Expenses/ExpenseFooter";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import CustomDataGrid from "~/components/CustomDataGrid";
import dayjs from "dayjs";

interface OwnProps {
  expenses: any;
  affRef?: string;
}

type Props = OwnProps;

const Expenses: FunctionComponent<Props> = (props) => {
  const { expenses, affRef } = props;
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
    },
    {
      field: "derivedValue",
      headerName: "Value (MUR)",
      type: "number",
      flex: 1,
      valueFormatter: (params) => Math.round(params.value).toLocaleString(),
    },
  ];
  const navigate = useNavigate();

  const csvFileName = `Expense_List_${dayjs().format("DD-MM-YYYY HH:mm a")}`;
  const slotProps: any = {
    footer: { total: Math.round(expenses?.totalAmount).toLocaleString() },
    toolbar: {
      csvOptions: { fileName:csvFileName },
    },
  };

  return (
    <div style={{ width: "100%", height: 500 }}>
      <CustomDataGrid
        paginate={false}
        columns={columns}
        rows={expenses?.data || []}
        density={"compact"}
        slots={{
          footer: CustomFooterTotalComponent,
          toolbar: CustomToolbar,
        }}
        slotProps={slotProps}
        getRowId={(row) => row.id}
        initialState={{
          pinnedColumns: { left: ["expenseDisplayName"] },
        }}
      />
    </div>
  );
};

export default Expenses;
