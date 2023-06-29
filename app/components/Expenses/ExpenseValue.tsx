import React from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";

export function ExpenseValue(props) {
  const { params } = props;
  if (params?.row?.derivedMultiplier) {
    return (
      <Tooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Multiplier</Typography>
            <Typography color="inherit">
              {params?.row?.multiplierName}({Math.round(params?.row?.derivedMultiplier)?.toLocaleString()})
            </Typography>
          </React.Fragment>
        }
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          useFlexGap
          justifyContent={"space-between"}
        >
          {params.value.toLocaleString()}
          <FaInfoCircle color={"rgba(0, 0, 0, 0.54)"} />
        </Stack>
      </Tooltip>
    );
  } else {
    return params.value.toLocaleString();
  }
}
