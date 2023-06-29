import { GridSlotsComponentsProps } from "@mui/x-data-grid";
import {
    Box,
    Chip, Divider,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import { MdInfo } from "react-icons/md";
import { ExpenseTooltip } from "~/components/Tooltip";

export function AffSummaryLegend(
  props: NonNullable<GridSlotsComponentsProps["footer"] | any>
) {
  return (
    <ExpenseTooltip
      title={
        <>
          <Typography textAlign={'center'} fontWeight={500}>Legend</Typography>
            <Divider/>
          <Stack direction={"column"} spacing={2} sx={{ p: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Chip
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  marginRight: "5px",
                }}
                size="small"
                color={"success"}
              />
              <Typography> Active</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Chip
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  marginRight: "5px",
                }}
                size="small"
                color={"error"}
              />
              <Typography>Inactive</Typography>
            </Box>
          </Stack>
        </>
      }
    >
      <IconButton size={'small'} sx={{ color: (theme) => theme.palette.text.secondary }}>
        <MdInfo />
      </IconButton>
    </ExpenseTooltip>
  );
}
