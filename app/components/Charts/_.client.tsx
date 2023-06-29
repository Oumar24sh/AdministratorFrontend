import React, { Fragment, FunctionComponent } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { Box } from "@mui/material";
import Settings from "~/components/Map/Settings";
import Chart from "react-apexcharts";
import { AFFColors } from "~/utils/enum";

interface OwnProps {
  data?: any;
  seriesName?: string;
}

type Props = OwnProps;

const ChartClient: FunctionComponent<Props> = (props) => {
  const { data, seriesName } = props;
  return (
    // <div id="chart">
    <Chart
      options={{
        chart: {
          width: "100%",
          height: "100%",
          type: "pie",
        },

        colors: AFFColors,
        // fill: { colors: AFFColors },
        legend: {
          position: "right",
        },
        labels: data?.map((i) => i.ref.toUpperCase()),
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      }}
      series={data?.map((i) => i[seriesName])}
      type="pie"
      width={420}
    />
    // </div>
  );
};

export default ChartClient;
