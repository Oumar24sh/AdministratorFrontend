import React, { FunctionComponent } from "react";
import { Chip, Stack } from "@mui/material";

interface OwnProps {
  params: any;
}

type Props = OwnProps;

const PlotHeaderRef: FunctionComponent<Props> = (props) => {
  const { params } = props;

  return (
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
  );
};

export default PlotHeaderRef;
