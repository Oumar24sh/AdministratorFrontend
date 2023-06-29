import { LoaderFunction } from "@remix-run/server-runtime";
import { api } from "~/http";
import {
  useLoaderData,
  useNavigation, useParams,
  useSearchParams,
} from "@remix-run/react";
import StripedDatagrid from "~/components/StripedDatagrid";
import {Chip, LinearProgress, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Tooltip} from "@mui/material";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import React from "react";
import {GridActionsCellItem, GridColDef, GridColumnHeaderParams} from "@mui/x-data-grid-pro";
import { PlotsStatusLegend } from "~/components/Datagrid/PlotsStatusLegend";
import Page from "~/components/Page";
import FormPage from "~/components/PageWithBack";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {MdEdit, MdList, MdMoney, MdMoreVert} from "react-icons/md";

export let loader: LoaderFunction = async ({ request, params }) => {
  const { affRef }: any = params;
  const url = new URL(request.url);
  const pageSize: number = parseInt(url.searchParams.get("pageSize")) || 10;
  const pageNumber: number = parseInt(url.searchParams.get("pageNumber")) || 0;
  const ref: string = url.searchParams.get("ref") || "";
  const use: string = url.searchParams.get("plotDestination") || "";
  const status: string = url.searchParams.get("plotStatusName") || "";
  console.log({affRef});
  return await api.plot.apiPlotAffAffRefGet({
    affRef,
    pageSize,
    pageNumber,
    ref,
    use,
    status,
  });
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
    // {
    //   field: "far",
    //   headerName: "FAR",
    //   type: "number",
    //   filterable: false,
    //
    //   minWidth: 10,
    // },
    // {
    //   field: "gfa",
    //   headerName: "GFA (m²)",
    //   type: "number",
    //   filterable: false,
    //
    //   minWidth: 150,
    // },
    // {
    //   field: "usage",
    //   headerName: "Usage",
    //   type: "number",
    //   filterable: false,
    //
    //   minWidth: 10,
    // },
    // {
    //   field: "weightedArea",
    //   headerName: "Surface Pondérée (m²)",
    //   type: "number",
    //   // width: 150,
    //   filterable: false,
    //
    //   flex: 1,
    //   minWidth: 200,
    //   valueFormatter: (params) => Math.round(params?.value),
    // },
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
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: (params) => {
        return [
          <Tooltip title={"Open Action's Menu"}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                  <React.Fragment>
                    <GridActionsCellItem
                        icon={<MdMoreVert size={15} />}
                        id="actions-menu"
                        aria-haspopup="true"
                        label="Edit"
                        className="textPrimary"
                        color="inherit"
                        {...bindTrigger(popupState)}
                    />
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem >
                        <ListItemIcon>
                          <MdEdit size={20} />
                        </ListItemIcon>
                        <ListItemText>Edit Plot</ListItemText>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <MdList size={20} />
                        </ListItemIcon>
                        <ListItemText>View Copropriete</ListItemText>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
              )}
            </PopupState>
          </Tooltip>,
        ];
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
    setSearchParams({ ...initialSearchParams, ...filterItems });
  };
  const transition = useNavigation();
  return (
    // <FormPage title={`Plots for ${affRef?.toUpperCase()}`}>
      <div style={{ width: "100%", height: 500 }}>
        <StripedDatagrid
          columns={columns}
          rows={plots.data}
          getRowId={(row) => row.ref}
          rowCount={plots.totalRecords}
          initialState={{
            pinnedColumns: { left: ["ref"] ,right:["actions"]},
            paginationModel: {
              pageSize: plots.pageSize,
              page: plots.pageNumber,
            },
          }}
          slots={{
            loadingOverlay: LinearProgress,
            toolbar: CustomToolbar,
          }}
          loading={transition.state === "loading"}
          density={"compact"}
          paginationMode="server"
          paginationModel={{ pageSize: plots.pageSize, page: plots.pageNumber }}
          pageSizeOptions={[10, 50, 100]}
          onPaginationModelChange={handlePaginationChange}
          pagination
          filterMode="server"
          onFilterModelChange={onFilterChange}
        />
      </div>
    // </FormPage>
  );
}
