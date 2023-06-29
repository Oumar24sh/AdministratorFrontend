import {GridSlotsComponentsProps} from "@mui/x-data-grid-pro";
import {Box, Typography} from "@mui/material";

export function CustomFooterTotalComponent(
    props: NonNullable<GridSlotsComponentsProps['footer'] | any>,
) {
    return (
        <Box sx={{ p: 1 }}>
            <Typography fontWeight={500} sx={{float: 'right'}}>Total (MUR) {props?.total}</Typography>
        </Box>
    );
}