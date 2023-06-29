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

export function PlotsStatusLegend(
    props: NonNullable<GridSlotsComponentsProps["footer"] | any>
) {
    return (
        <ExpenseTooltip 
            title={
                <>
                    <Typography textAlign={'center'} fontWeight={500}>Legend</Typography>
                    <Divider/>
                    <Stack direction={"column"} useFlexGap spacing={2} sx={{ p: 1 }}>
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
                            <Typography noWrap>Terrain non viabilisé</Typography>
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
                                color={"warning"}
                            />
                            <Typography noWrap>Terrain viabilisé excluant à bâtir</Typography>
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
                                color={"info"}
                            />
                            <Typography noWrap>Terrain à bâtir</Typography>
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
                                color={"success"}
                            />
                            <Typography noWrap>Terrain construit</Typography>
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
