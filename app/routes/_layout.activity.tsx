import React from "react";
import Page from "~/components/Page";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import CustomDataGrid from "~/components/CustomDataGrid";
import dayjs from "dayjs";

export async function loader({ request }) {
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  return await api.audit.apiAuditGet({ pageSize, pageNumber });
}

export default function Activity() {
  const audits = useLoaderData();
  const columns = [
    {
      field: "type",
      headerName: "Activity Type",
      flex: 1,
    },
    {
      field: "user",
      headerName: "User",
      renderCell: (params) => params.row.firstName + " " + params.row.lastName,
      flex: 1,
    },
    {
      field: "tableName",
      headerName: "Resource Name",
      flex: 1,
      renderCell: ({ value }) => value || "-",
    },
    {
      field: "oldValues",
      headerName: "Old Values",
      flex: 1,
      renderCell: ({ value }) => value || "-",
    },
    {
      field: "newValues",
      headerName: "New Values",
      renderCell: ({ value }) => value || "-",
      flex: 1,
    },
    {
      field: "dateTime",
      headerName: "TimeStamp",
      type: "dateTime",
      valueGetter: ({ value }) => value && new Date(value),
      flex: 1,
    },
  ];
  const csvFileName = `User_Activity_List_${dayjs().format(
    "DD-MM-YYYY HH:mm"
  )}`;

  return (
    <Page title={"User Activity"}>
      <CustomDataGrid
        csvOptions={{ fileName: csvFileName }}
        source={audits}
        getRowId={(row) => row.id}
        columns={columns}
        paginate
      />
    </Page>
  );
}
