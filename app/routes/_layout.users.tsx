import React from "react";
import Page from "~/components/Page";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import CustomDataGrid from "~/components/CustomDataGrid";
import { Box, Button } from "@mui/material";
import { MdDownload, MdOutlineAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import { CustomFooterTotalComponent } from "~/components/Expenses/ExpenseFooter";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";

export async function loader() {
  return await api.user.apiUserGet();
}

export default function Users() {
  const users = useLoaderData();
  const columns = [
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "userName",
      headerName: "Username",
      flex: 1,
    },
    {
      field: "roles",
      headerName: "Roles",
      flex: 1,
    },
  ];
  const navigate = useNavigate();
  const csvFileName = `Users_List_${dayjs().format("DD-MM-YYYY HH:mm")}`;
  const slotProps: any = {
    toolbar: {
      csvOptions: { fileName: csvFileName },
      extra: (
        <Box>
          <Button
            startIcon={<MdOutlineAdd />}
            size={"small"}
            onClick={() => navigate("/users/add")}
          >
            New User
          </Button>
        </Box>
      ),
    },
  };
  return (
    <Page title={"Users"}>
      <CustomDataGrid
        slotProps={slotProps}
        source={users}
        getRowId={(row) => row.id}
        columns={columns}
        paginate
      />
    </Page>
  );
}
