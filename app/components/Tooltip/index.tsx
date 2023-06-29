import React from "react";
import {styled, Tooltip, tooltipClasses, TooltipProps} from "@mui/material";

export const ExpenseTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'rgb(238, 242, 246)',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 500,
        fontSize: theme.typography.pxToRem(12),
        // border: '1px solid #dadde9',
    },
}));