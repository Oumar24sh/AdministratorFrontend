import React, { FunctionComponent } from "react";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid-pro";
import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export function CustomToolbar(
  props: NonNullable<GridSlotsComponentsProps["toolbar"]>
) {
  return (
    <GridToolbarContainer sx={{ justifyContent: "space-between" }}>
      <Box>
        {/*<GridToolbarColumnsButton />*/}
        <GridToolbarFilterButton />
      </Box>
      {/*<GridToolbarDensitySelector />*/}
      {/*<GridToolbarExport />*/}
      {props?.extra}
    </GridToolbarContainer>
  );
}

export default CustomToolbar;
