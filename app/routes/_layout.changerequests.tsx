import React from "react";
import Page from "~/components/Page";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import CustomDataGrid from "~/components/CustomDataGrid";
import authenticator from "~/utils/auth.server";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import PlotStatusChip from "~/components/PlotStatusChip";
import ChangeRequestStatusChip from "~/components/ChangeRequestStatusChip";
import { Tooltip } from "@mui/material";
import { MdCheck, MdClose } from "react-icons/md";
import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { ActionArgs } from "@remix-run/node";
import {
  commitSession,
  getSession,
  setToastMessage,
} from "~/utils/session.server";
import dayjs from "dayjs";

export async function loader({ request }) {
  const authenticated = await authenticator.isAuthenticated(request);
  const accessToken = authenticated?.accessToken;
  return api.changeRequest.apiChangeRequestGet({
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  // return [];
}

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const session = await getSession(request.headers.get("Cookie"));
    const formData = await request.formData();
    const statusId: any = formData.get("statusId");
    const id: any = formData.get("id");
    var text =
      statusId == 2
        ? "Request approved successfully"
        : "Request declined successfully";
    await api.changeRequest.apiChangeRequestPost({
      changeRequestBody: { id, statusId },
    });
    const message = {
      options: { variant: "success" },
      message: text,
    };
    setToastMessage(session, message);

    return redirect("/changerequests", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  } catch (e) {
    if (e?.response) {
      return e.response;
    } else {
      return { error: true };
    }
  }
};
export default function ChangeRequests() {
  const changeRequests = useLoaderData();
  const columns = [
    {
      field: "requestorName",
      headerName: "Resquestor",
      flex: 1,
    },
    {
      field: "plotRef",
      headerName: "Plot",
      flex: 1,
    },
    {
      field: "oldPlotStatusName",
      headerName: "Previous Status",
      flex: 1,
      renderCell: (params) => (
        <PlotStatusChip
          value={params.value}
          statusRef={params.row.oldPlotStatusRef}
        />
      ),
    },
    {
      field: "plotStatusName",
      headerName: "New Status",
      flex: 1,
      renderCell: (params) => (
        <PlotStatusChip
          value={params.value}
          statusRef={params.row.plotStatusRef}
        />
      ),
    },
    {
      field: "statusName",
      headerName: "Request Status",
      flex: 1,
      renderCell: (params) => (
        <ChangeRequestStatusChip
          statusRef={params.value}
          value={params.value}
        />
      ),
    },
    {
      field: "approverName",
      headerName: "Approver",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      type: "actions",
      width: 100,
      getActions: (params) => {
        return [
          <Tooltip title={"Approve"}>
            <form method="post">
              <input type={"hidden"} value={params.row.id} name={"id"} />
              <input type={"hidden"} value={2} name={"statusId"} />
              <GridActionsCellItem
                disabled={["Declined", "Approved"].includes(
                  params.row.statusName
                )}
                icon={<MdCheck size={25} />}
                label="Approve"
                color="success"
                type={"submit"}
              />
            </form>
          </Tooltip>,
          <Tooltip title={"Decline"}>
            <form method="post">
              <input type={"hidden"} value={params.row.id} name={"id"} />
              <input type={"hidden"} value={3} name={"statusId"} />
              <GridActionsCellItem
                disabled={["Declined", "Approved"].includes(
                  params.row.statusName
                )}
                icon={<MdClose size={25} />}
                label="Decline"
                color="error"
                type={"submit"}
              />
            </form>
          </Tooltip>,
        ];
      },
    },
  ];
  const csvFileName = `Change_Requests_List_${dayjs().format(
    "DD-MM-YYYY HH:mm"
  )}`;

  return (
    <Page title={"Change Requests"}>
      <CustomDataGrid
        csvOptions={{ fileName: csvFileName }}
        rows={changeRequests || null}
        getRowId={(row) => row.id}
        columns={columns}
      />
    </Page>
  );
}
