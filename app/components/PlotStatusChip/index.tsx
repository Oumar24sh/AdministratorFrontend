import React, { FunctionComponent } from "react";
import { Chip, Stack } from "@mui/material";

interface OwnProps {
  statusRef?: any;
  value?: any;
}

type Props = OwnProps;

const PlotStatusChip: FunctionComponent<Props> = (props) => {
  const { statusRef, value } = props;
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
    >
      <>
        {(() => {
          switch (statusRef) {
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
      <div style={{ marginLeft: 10 }}>{value}</div>

    </Stack>
  );
};

export default PlotStatusChip;
