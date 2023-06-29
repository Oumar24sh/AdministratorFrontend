import React, { FunctionComponent } from "react";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid-pro";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export function CustomToolbar(
  props: NonNullable<GridSlotsComponentsProps["toolbar"]>
) {
  const {extra,csvOptions} = props
  return (
    <GridToolbarContainer sx={{ justifyContent: "space-between" }}>
      <Box>
        <GridToolbarFilterButton />
        <GridToolbarExport
          csvOptions={csvOptions}
          printOptions={{ disableToolbarButton: true }}
        />
      </Box>
      {extra}
    </GridToolbarContainer>
  );
}

export default CustomToolbar;
