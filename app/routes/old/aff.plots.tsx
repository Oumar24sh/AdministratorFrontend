import React from "react";
import { api } from "~/http";
import { LoaderFunction } from "@remix-run/server-runtime";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import {GridColDef, GridColumnHeaderParams, GridToolbar} from "@mui/x-data-grid-pro";
import StripedDatagrid from "~/components/StripedDatagrid";
import { Chip, LinearProgress, Stack } from "@mui/material";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import {AffSummaryLegend} from "~/components/Datagrid/AffSummaryLegend";
import {PlotsStatusLegend} from "~/components/Datagrid/PlotsStatusLegend";

export let loader: LoaderFunction = async ({ request }) => {
  // const { pageSize, page: pageNumber } = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 1;
  const ref: string = url.searchParams.get("ref") || "";
  const use: string = url.searchParams.get("plotDestination") || "";
  const status: string = url.searchParams.get("plotStatusName") || "";
  return await api.plot.apiPlotGet({ pageSize, pageNumber, ref, use, status });
};
export default function affPlots() {
  const plots = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: GridColDef[] = [
    {
      field: "ref",
      headerName: "Ref",
      valueFormatter: (params) => params?.value?.toUpperCase(),
      // flex: 1,
      minWidth: 150,
      renderHeader: (params: GridColumnHeaderParams) => (
          <>
            <strong>Ref</strong>
            <PlotsStatusLegend />
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
            {(() => {
              switch (params?.row?.plotStatusRef) {
                case "non_viabilise":
                  return (
                    <Chip
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                      }}
                      size="small"
                      color={"error"}
                    />
                  );
                case "viabilise_non_serv_plot":
                  return (
                    <Chip
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                      }}
                      size="small"
                      color={"warning"}
                    />
                  );
                case "viabilise_serv_plot":
                  return (
                    <Chip
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                      }}
                      size="small"
                      color={"info"}
                    />
                  );
                case "construit":
                  return (
                    <Chip
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                      }}
                      size="small"
                      color={"success"}
                    />
                  );
              }
            })()}
          </>
          <div style={{ marginLeft: 10 }}>{params?.value?.toUpperCase()}</div>
        </Stack>
      ),

      // Define the custom style for the column
      // headerAlign: "center",
    },
    {
      field: "plotStatusName",
      headerName: "Status",
      minWidth: 200,
      // Define the custom style for the column
      // headerAlign: "center",
    },
    {
      field: "plotDestination",
      headerName: "Use",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "gisArea",
      headerName: "GIS Area (m²)",
      type: "number",
      filterable: false,

      minWidth: 20,
    },
    {
      field: "far",
      headerName: "FAR",
      type: "number",
      filterable: false,

      minWidth: 10,
    },
    {
      field: "gfa",
      headerName: "GFA (m²)",
      type: "number",
      filterable: false,

      minWidth: 150,
    },
    {
      field: "usage",
      headerName: "Usage",
      type: "number",
      filterable: false,

      minWidth: 10,
    },
    {
      field: "weightedArea",
      headerName: "Surface Pondérée (m²)",
      type: "number",
      // width: 150,
      filterable: false,

      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    {
      field: "tantiemesAFMVotes",
      headerName: "Tantièmes Générale Votes",
      type: "number",
      // width: 110,
      filterable: false,

      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    {
      field: "tantiemesAFFVotes",
      headerName: "Tantièmes Spéciale Votes",
      type: "number",
      // width: 110,
      filterable: false,

      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    {
      field: "tantiemesAFMCharges",
      headerName: "Tantièmes Générale Charges",
      type: "number",
      filterable: false,

      // width: 110,
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    {
      field: "tantiemesAFFCharges",
      headerName: "Tantièmes Spéciale Charges",
      type: "number",
      filterable: false,

      // width: 110,
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    {
      field: "chargesSpeciales",
      headerName: "Charges Spéciale (Rs)",
      type: "number",
      // width: 110,
      filterable: false,
      flex: 1,
      minWidth: 200,
      valueGetter: (params) => {
        if (params.row.active) {
          return Math.round(
            (params.row.affCharges / 10000) * params.row.tantiemesAFFCharges
          ).toLocaleString();
        } else {
          return "-";
        }
      },
    },
  ];

  const handlePaginationChange = (pageOptions) => {
    const { page: pageNumber, pageSize } = pageOptions;
    if (pageNumber && pageSize) {
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
    if(filterOptions.items.length > 0) {
    setSearchParams({ ...initialSearchParams, ...filterItems });
    }else{
      setSearchParams({})
    }
  };
  const transition = useNavigation();
  return (
    <div style={{ width: "100%", height: 500 }}>
      <StripedDatagrid
        columns={columns}
        rows={plots.data}
        getRowId={(row) => row.id}
        rowCount={plots.totalRecords}
        initialState={{
          pinnedColumns: { left: ["ref"] },
          paginationModel: { pageSize: plots.pageSize, page: plots.pageNumber },
        }}
        slots={{
          loadingOverlay: LinearProgress,
          toolbar: CustomToolbar,
        }}
        loading={transition.state === "loading"}
        density={"compact"}
        paginationMode="server"
        paginationModel={{ pageSize: plots.pageSize, page: plots.pageNumber }}
        pageSizeOptions={[10,20,50,100]}
        onPaginationModelChange={handlePaginationChange}
        pagination
        filterMode="server"
        onFilterModelChange={onFilterChange}
      />
    </div>
  );
}
