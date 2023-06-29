import { alpha, styled } from "@mui/material";
import { DataGridPro, gridClasses } from "@mui/x-data-grid-pro";

const ODD_OPACITY = 0.05;

const StripedDataGrid = styled(DataGridPro)(({ theme }) => {
  return {
    [`& .${gridClasses.row}.greyed-out`]: {
      backgroundColor: alpha(theme.palette.grey[300], 0.5),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.grey[400],0.1),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
    },
    [`& .${gridClasses.row}.success`]: {
      backgroundColor: alpha(theme.palette.success.main, ODD_OPACITY),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
    [`& .${gridClasses.cell}.success`]: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },
    [`& .${gridClasses.cell}.info`]: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    },
    [`& .${gridClasses.cell}.warning`]: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
    },
    [`& .${gridClasses.cell}.error`]: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },

    [`& .${gridClasses.row}.error`]: {
      backgroundColor: alpha(theme.palette.error.main, ODD_OPACITY),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
    [`& .${gridClasses.row}.info`]: {
      backgroundColor: alpha(theme.palette.info.main, ODD_OPACITY),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
    [`& .${gridClasses.row}.warning`]: {
      backgroundColor: alpha(theme.palette.warning.main, ODD_OPACITY),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  };
});

export default StripedDataGrid;
