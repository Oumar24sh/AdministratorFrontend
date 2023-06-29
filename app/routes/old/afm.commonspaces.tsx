import React from "react";
import { LoaderFunction } from "@remix-run/server-runtime";
import axios from "axios";
import api from "~/api";
import { useLoaderData } from "@remix-run/react";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";


export let loader: LoaderFunction = async () => {
  const commonSpaces = await axios.get(api.GetAfmCommonSpaces);
  return commonSpaces?.data;
};

export default function _afmCommonspaces() {
  const data = useLoaderData();

  const columns: GridColDef[] = [
    {
      field: "ref",
      headerName: "Ref",
      minWidth: 50,
    },
    {
      field: "commonSpaceTypeName",
      headerName: "Common Space Type",
      minWidth: 200,
    },

    {
      field: "gisArea",
      headerName: "GIS Area (m²)",
      flex: 1,
      type: "number",
      minWidth: 150,
    },
    {
      field: "roadLength",
      headerName: "Road Length (m)",
      type: "number",
      flex: 1,
      minWidth: 150,

      valueFormatter: (params) =>
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "-",
    },
    {
      field: "areaOfRoadSurface",
      headerName: "Area of Road Surface (m²)",
      type: "number",
      flex: 1,
      minWidth: 200,

      valueFormatter: (params) =>
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "-",
    },
    {
      field: "areaOfGreenSpace",
      headerName: "Area of Green Space (m²)",
      type: "number",
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) =>
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "-",
    },
    {
      field: "noOfStreetLights",
      headerName: "No of Streetlights",
      type: "number",
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) =>
        params?.value ? params?.value?.toLocaleString() : "-",
    },
  ];
  return (
    <div style={{ width: "100%", height: 500 }}>
      <DataGridPro
        columns={columns}
        rows={data}
        autoPageSize
        density={"compact"}
        getRowId={(row) => row.ref}
        initialState={{
          pinnedColumns: { left: ["ref", "commonSpaceTypeName"] },
        }}
      />
    </div>
  );
}
