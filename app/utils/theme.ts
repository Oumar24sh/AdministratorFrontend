import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0092BC",
    },
    secondary: {
      main: "#C7D534",
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    // borderRadius: 3,
  },
  // shadows: ["rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"],
  components: {
    // Name of the component
    MuiButtonBase: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          // borderRadius:"16px !important",
          "&:hover": {
            boxShadow: "none !important",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          // boxShadow: "none !important",
          borderRadius: "16px",
          // '&:hover': {
          //   boxShadow: "none !important",
          // },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "white",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        // root: {
        paper: {
          boxShadow: "none",
          backgroundColor: "white",
          border: "none",
        },
        // },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 3,
            marginBottom: "3px",
          }),
      },
    },
    MuiPopover: {
      defaultProps: {
        // elevation:1
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: { border: "none" },
      },
    },
  },
});

export default theme;
