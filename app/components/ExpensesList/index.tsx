import React, { FunctionComponent } from "react";
import {
  DataGridPro,
  GridActionsCellItem,
  GridColDef,
} from "@mui/x-data-grid-pro";
import { ExpenseValue } from "~/components/Expenses/ExpenseValue";
import { useNavigate } from "react-router";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { MdDownload, MdOutlineAdd } from "react-icons/md";
import { CustomFooterTotalComponent } from "~/components/Expenses/ExpenseFooter";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import CustomDataGrid from "~/components/CustomDataGrid";
import dayjs from "dayjs";
import { AiFillEye } from "react-icons/ai";

interface OwnProps {
  expenses: any;
  affRef?: string;
}

type Props = OwnProps;

const ExpenseList: FunctionComponent<Props> = (props) => {
  const { expenses, affRef } = props;
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Financial Year",
      flex: 2,
    },
    {
      field: "actions",
      width: 100,
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <Tooltip title={"View Expenses List"}>
            <IconButton
              icon={<AiFillEye size={20} />}
              label="Open"
              color="primary"
              onClick={() =>
                navigate(
                  affRef
                    ? `/aff/${affRef}/expenses/view/${params.row.name}`
                    : `/afm/expenses/${params.row.name}`
                )
              }
            >
              <AiFillEye size={20} />
            </IconButton>
          </Tooltip>
        );
      },
    },
  ];
  const navigate = useNavigate();

  const csvFileName = `Expense_List_${dayjs().format("DD-MM-YYYY HH:mm a")}`;
  const slotProps: any = {
    toolbar: {
      csvOptions: { fileName: csvFileName },
      extra: (
        <Box>
          <Button
            onClick={() =>
              navigate(
                affRef ? `/aff/${affRef}/expenses/add` : "/afm/expenses/add"
              )
            }
            startIcon={<MdOutlineAdd />}
            size={"small"}
          >
            New Expense
          </Button>
        </Box>
      ),
    },
  };

  return (
    <div style={{ width: "100%", height: 500 }}>
      <CustomDataGrid
        paginate={false}
        columns={columns}
        rows={expenses}
        density={"compact"}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={slotProps}
        getRowId={(row) => row.id}
        initialState={{
          pinnedColumns: { left: ["name"], right: ["actions"] },
        }}
      />
    </div>
  );
};
export default ExpenseList;
