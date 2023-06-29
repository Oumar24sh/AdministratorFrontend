import React, { Fragment, FunctionComponent } from "react";
import {
  CSSObject,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
  Theme,
  Tooltip,
  Drawer as MuiDrawer,
} from "@mui/material";
import { Link, useLocation } from "@remix-run/react";
import { drawerWidthNumber, navbarHeightInPixels } from "~/utils/enum";

interface OwnProps {
  menuItems: any;
  open: boolean;
}

type Props = OwnProps;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidthNumber,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidthNumber,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const Drawer: FunctionComponent<Props> = (props) => {
  const { menuItems, open } = props;
  const { pathname } = useLocation();

  return (
    <StyledDrawer
      sx={{
        transition: "all 200ms ease-in-out",
      }}
      variant="permanent"
      open={open}
    >
      <List sx={{ mt: navbarHeightInPixels, pt: 0 }}>
        {menuItems?.map((item, index) => {
          const header = item?.header;
          const children = item?.children;
          if (header) {
            return (
              <Fragment key={index}>
                {open ? (
                  <ListSubheader>{header}</ListSubheader>
                ) : (
                  <Divider sx={{ my: 1 }} />
                )}
                {children?.map((menuItem) => {
                  return (
                    <ListItemButton
                      selected={
                        pathname === menuItem.route
                      }
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      disabled={menuItem?.disabled}
                      component={Link}
                      to={menuItem.route}
                      key={menuItem.name}
                    >
                      {open ? (
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {menuItem?.icon}
                        </ListItemIcon>
                      ) : (
                        <Tooltip
                          placement={"right"}
                          arrow
                          title={menuItem.name}
                        >
                          <ListItemIcon
                            sx={{
                              // minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {menuItem?.icon}
                          </ListItemIcon>
                        </Tooltip>
                      )}
                      <ListItemText
                        primary={menuItem.name}
                        // secondary={item?.AdditionalText}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  );
                })}
              </Fragment>
            );
          } else {
          }
        })}
      </List>
    </StyledDrawer>
  );
};
export default Drawer;
