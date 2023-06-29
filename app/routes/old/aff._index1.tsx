import React, { useState } from "react";
import {
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid-pro";
import axios from "axios";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import StripedDatagrid from "~/components/StripedDatagrid";
import {
  Chip,
  Stack,
  Tooltip,
} from "@mui/material";
import { AffSummaryLegend } from "~/components/Datagrid/AffSummaryLegend";
import { useNavigate } from "react-router";

import {AiFillEye} from "react-icons/ai";

export async function loader() {
  try {
    const response = await api.summary.apiSummaryGet();
    return response|| [];
  } catch (err) {
    console.error(err);
    // redirect("/");
    return {};
  }
}

export default function affIndex() {
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
        return Math.round(
          (params.row.tantiemesAFMCharges / 100000) * params.row.afmCharges
        ).toLocaleString();
      },

    },
    {
      field: "affCharges",
      headerName: "Dépenses Totale AFF (MUR)",
      type: "number",
      // width: 110,
      minWidth: 220,
      valueFormatter: (params) => Math.round(params?.value).toLocaleString(),

    },
    {
      field: "chargesSpeciales",
      headerName: "Charges AFF (MUR)",
      type: "number",
      // width: 110,
      minWidth: 220,
      valueGetter: (params) => {
        if (params.row.active) {
          return Math.round(
            (params.row.tantiemesAFFCharges / 10000) * params.row.affCharges
          ).toLocaleString();
        } else {
          return "N/A";
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
              icon={<AiFillEye size={15} />}
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
      {/*<AffSummaryLegend />*/}
      <StripedDatagrid
        // initialState={{
        //   pinnedColumns: { left: ["actions"] },
        // }}
        rows={data}
        columns={columns}
        autoPageSize
        initialState={{
          pinnedColumns: { left: ["isActive", "ref"], right: ["actions"] },
        }}
        // slots={{
        //   footer: CustomFooterStatus
        // }}
        density={"compact"}
        getRowClassName={(params) => (params.row.isActive ? "" : "greyed-out")}
        // style={{ cursor: "pointer" }}
      />
    </div>
  );
}
