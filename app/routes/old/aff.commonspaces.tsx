import React from "react";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import axios from "axios";
import { api } from "~/http";
import { LoaderFunction } from "@remix-run/server-runtime";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";

export let loader: LoaderFunction = async ({ request }) => {
  // const { pageSize, page: pageNumber } = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 0;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  const ref: string = url.searchParams.get("ref") || "";
  const commonSpaceTypeName: string =
    url.searchParams.get("commonSpaceTypeName") || "";
  return api.commonSpace.apiCommonSpaceAffGet({
    pageSize,
    pageNumber,
    ref,
    commonSpaceTypeName,
  });
};

export default function affCommonSpaces() {
  const commonspaces = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

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
      field: "affRef",
      headerName: "AFF",
      minWidth: 50,
      valueFormatter: (params) => params?.value?.toUpperCase(),
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
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "N/A",
    },
    {
      field: "areaOfRoadSurface",
      headerName: "Area of Road Surface (m²)",
      type: "number",
      flex: 1,
      minWidth: 200,

      valueFormatter: (params) =>
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "N/A",
    },
    {
      field: "areaOfGreenSpace",
      headerName: "Area of Green Space (m²)",
      type: "number",
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) =>
        params?.value ? Math?.round(params?.value)?.toLocaleString() : "N/A",
    },
    {
      field: "noOfStreetLights",
      headerName: "No of Streetlights",
      type: "number",
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) =>
        params?.value ? params?.value?.toLocaleString() : "N/A",
    },
  ];
  const handlePaginationChange = (pageOptions) => {
    const { page: pageNumber, pageSize } = pageOptions;
    if (pageNumber !== null && pageSize !== null) {
      const initialSearchParams = [...searchParams.entries()].reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
      );
      setSearchParams({ ...initialSearchParams, pageSize, pageNumber });
    }
  };
  const onFilterChange = (filterOptions) => {
    const filterItems = filterOptions?.items?.reduce((acc, val) => {
      acc[val.field] = val.value;
      return acc;
    }, {});
    const initialSearchParams = [...searchParams.entries()].reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
    if (filterOptions.items.length > 0) {
      setSearchParams({ ...initialSearchParams, ...filterItems });
    }
  };
  const transition = useNavigation();

  return (
    <div style={{ width: "100%", height: 500 }}>
      <DataGridPro
        columns={columns}
        rows={commonspaces.data}
        density={"compact"}
        getRowId={(row) => row.id}
        rowCount={commonspaces.totalRecords}
        initialState={{
          pinnedColumns: {
            left: ["ref", "commonSpaceTypeName"],
          }
        }}
        loading={transition.state === "loading"}
        paginationMode="server"
        paginationModel={{
          pageSize: commonspaces.pageSize,
          page: commonspaces.pageNumber,
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        onPaginationModelChange={handlePaginationChange}
        pagination
        filterMode="server"
        onFilterModelChange={onFilterChange}
      />
    </div>
  );
}
