import React, { Fragment, FunctionComponent } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { Box } from "@mui/material";
import Settings from "~/components/Map/Settings";

interface OwnProps {}

type Props = OwnProps;

const MapOverview: FunctionComponent<Props> = (props) => {
  const position: LatLngTuple = [-20.099480, 57.582981];

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", md: "calc(100vh - 80px)" },
        width: "inherit",
      }}
    >
      {/*<Box sx={{ position: "absolute", width: 300, right: 0 }}>*/}
      {/*  <Settings />*/}
      {/*</Box>*/}
      <MapContainer
        style={{ width: "100%", height: "100%", borderRadius: "16px" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Box>
  );
};

export default MapOverview;
