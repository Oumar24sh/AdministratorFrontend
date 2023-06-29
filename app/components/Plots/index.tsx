import React, { FunctionComponent } from "react";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import CustomDataGrid from "~/components/CustomDataGrid";
import {
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid-pro";
import { PlotsStatusLegend } from "~/components/Datagrid/PlotsStatusLegend";
import PlotHeaderRef from "~/components/Plots/PlotHeaderRef";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { BiBuildingHouse } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import dayjs from "dayjs";

interface OwnProps {
  plots: any;
}

type Props = OwnProps;

const Plots: FunctionComponent<Props> = (props) => {
  const { plots } = props;
  const navigate = useNavigate();
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
      renderCell: (params) => <PlotHeaderRef params={params} />,
    },
    {
      field: "plotStatusName",
      headerName: "Status",
      minWidth: 200,
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
      filterable: false,
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    // {
    //   field: "tantiemesAFMVotes",
    //   headerName: "Tantièmes AFM Votes",
    //   type: "number",
    //   filterable: false,
    //   flex: 1,
    //   minWidth: 200,
    //   valueFormatter: (params) => Math.round(params?.value),
    // },
    {
      field: "tantiemesAFFVotes",
      headerName: "Tantièmes AFF Votes",
      type: "number",
      filterable: false,
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    // {
    //   field: "tantiemesAFMCharges",
    //   headerName: "Tantièmes AFM Charges",
    //   type: "number",
    //   filterable: false,
    //
    //   // width: 110,
    //   flex: 1,
    //   minWidth: 200,
    //   valueFormatter: (params) => Math.round(params?.value),
    // },
    {
      field: "tantiemesAFFCharges",
      headerName: "Tantièmes AFF Charges",
      type: "number",
      filterable: false,

      // width: 110,
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => Math.round(params?.value),
    },
    {
      field: "chargesSpeciales",
      headerName: "Charges AFF (Rs)",
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
        if (!params.row.hasCoproperty) {
          return [
            <Tooltip title={"Edit Plot"}>
              <GridActionsCellItem
                icon={<MdEdit size={20} />}
                label="Edit"
                color="primary"
                onClick={() =>
                  navigate(
                    `/aff/${params.row.affRef}/plots/${params.row.ref}/edit`
                  )
                }
              />
            </Tooltip>,
          ];
        } else {
          return [
            <Tooltip title={"Edit Plot"}>
              <GridActionsCellItem
                icon={<MdEdit size={20} />}
                label="Edit"
                color="primary"
                onClick={() =>
                  navigate(
                    `/aff/${params.row.affRef}/plots/${params.row.ref}/edit`
                  )
                }
              />
            </Tooltip>,
            <Tooltip title={"View Coproperty"}>
              <GridActionsCellItem
                icon={<BiBuildingHouse size={20} />}
                label="Edit"
                color="info"
                onClick={() =>
                  navigate(
                    `/plot/${params.row.affRef}/${params.row.ref}/coproperty`
                  )
                }
              />
            </Tooltip>,
          ];
        }
      },
    },
  ];
  const csvFileName = `Plot_List_${dayjs().format("DD-MM-YYYY HH:mm a")}`;

  return (
    <div style={{ width: "100%", height: 500 }}>
      <CustomDataGrid
        csvOptions={{ fileName: csvFileName }}
        columns={columns}
        source={plots}
        getRowId={(row) => row.id}
        initialState={{
          pinnedColumns: { left: ["ref"], right: ["actions"] },
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
        density={"compact"}
        paginate
      />
    </div>
  );
};

export default Plots;
