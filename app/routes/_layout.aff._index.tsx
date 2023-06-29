import { useLoaderData } from "@remix-run/react";
import { useNavigate } from "react-router";
import {
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid-pro";
import { AffSummaryLegend } from "~/components/Datagrid/AffSummaryLegend";
import { Chip, Stack, Tooltip } from "@mui/material";
import { AiFillEye } from "react-icons/ai";
import StripedDatagrid from "~/components/StripedDatagrid";
import React from "react";
import { api } from "~/http";

export async function loader() {
  return await api.summary.apiSummaryGet();
}

export default function AffSummary() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const columns: GridColDef[] = [
    {
      field: "ref",
      headerName: "Ref",
      minWidth: 150,
      renderHeader: (params: GridColumnHeaderParams) => (
        <>
          <strong>Ref</strong>
          <AffSummaryLegend />
        </>
      ),
      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            {params?.row?.isActive ? (
              <Chip
                sx={{ width: "10px", height: "10px", borderRadius: "100%" }}
                size="small"
                color={"success"}
              />
            ) : (
              <Chip
                sx={{ width: "10px", height: "10px", borderRadius: "100%" }}
                size="small"
                color={"error"}
              />
            )}
          </>
          <div style={{ marginLeft: 10 }}>{params?.value?.toUpperCase()}</div>
        </Stack>
      ),
    },

    {
      field: "displayName",
      headerName: "Name",
      // width: 150,
      minWidth: 270,
    },
    {
      field: "weightedArea",
      headerName: "Surface Pondérée (m²)",
      type: "number",
      // width: 150,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value).toLocaleString(),
    },
    {
      field: "tantiemesAFMVotes",
      headerName: "Tantièmes AFM Votes",
      type: "number",
      // width: 110,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value).toLocaleString(),
    },
    {
      field: "tantiemesAFMCharges",
      headerName: "Tantièmes AFM Charges",
      type: "number",
      // width: 110,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value).toLocaleString(),
    },
    {
      field: "chargesGenerales",
      headerName: "Charges AFM (MUR)",
      type: "number",
      // width: 110,
      minWidth: 200,
      valueGetter: (params) => {
        return params.row.afmCharges && Math.round(
          (params.row.tantiemesAFMCharges / 100000) * params.row.afmCharges
        ).toLocaleString() || '-';
      },
    },
    // {
    //   field: "affCharges",
    //   headerName: "Dépenses Totale AFF (MUR)",
    //   type: "number",
    //   // width: 110,
    //   minWidth: 220,
    //   valueFormatter: (params) =>params?.value && Math.round(params?.value).toLocaleString() || "-",
    // },
    {
      field: "chargesSpeciales",
      headerName: "Charges AFF (MUR)",
      type: "number",
      // width: 110,
      minWidth: 220,
      valueGetter: (params) => {
        if (params.row.isActive) {
          return params.row.affCharges && Math.round(
            (params.row.tantiemesAFFCharges / 10000) * params.row.affCharges
          ).toLocaleString() || "-";
        } else {
          return "-";
        }
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: (params) => {
        return [
          <Tooltip title={"View Aff Details"}>
            <GridActionsCellItem
              icon={<AiFillEye size={20} />}
              label="Edit"
              color="primary"
              onClick={() => navigate(`/aff/${params.row.ref}`)}
            />
          </Tooltip>,
        ];
      },
    },
  ];
  return (
    <div style={{ width: "100%", height: 500 }}>
      <StripedDatagrid
        rows={data}
        columns={columns}
        autoPageSize
        initialState={{
          pinnedColumns: { left: ["isActive", "ref"], right: ["actions"] },
        }}
        density={"compact"}
        getRowClassName={(params) => (params.row.isActive ? "" : "greyed-out")}
      />
    </div>
  );
}
