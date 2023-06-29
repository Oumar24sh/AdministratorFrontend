import React from "react";
import Page from "~/components/Page";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import CustomDataGrid from "~/components/CustomDataGrid";

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
    },{
      field: "roles",
      headerName: "Roles",
      flex: 1,
    },
  ];
  return (
    <Page title={"Users"}>
      <CustomDataGrid
        source={users}
        getRowId={(row) => row.id}
        columns={columns}
        paginate
      />
    </Page>
  );
}
