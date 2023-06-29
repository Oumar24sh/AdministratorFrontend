import React, { FunctionComponent } from 'react';
import {GridColDef} from "@mui/x-data-grid-pro";
import CustomDataGrid from "~/components/CustomDataGrid";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import dayjs from "dayjs";

interface OwnProps {
    commonSpaces:any;
    showAffRef?:boolean;
}

type Props = OwnProps;

const CommonSpaces: FunctionComponent<Props> = (props) => {
    const {commonSpaces,showAffRef=false} = props
    const columns: GridColDef[]  = showAffRef?[
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
    ]:[{
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
        },];
    const csvFileName = `Common_Space_List_${dayjs().format("DD-MM-YYYY HH:mm a")}`;

    return ( <div style={{ width: "100%", height: 500 }}>
        <CustomDataGrid
            csvOptions={{ fileName: csvFileName }}
            columns={columns}
            source={commonSpaces}
            getRowId={(row) => row.id}
            initialState={{
                pinnedColumns: { left: ["ref","commonSpaceTypeName"] },
            }}
            slots={{
                toolbar: CustomToolbar,
            }}
            density={"compact"}
            paginate
        />
    </div>);
};

export default CommonSpaces;
