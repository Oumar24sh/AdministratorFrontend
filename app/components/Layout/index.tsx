import React, { FunctionComponent, useMemo } from "react";
import { Box, CssBaseline, styled, CSSObject, Theme } from "@mui/material";
import Navbar from "~/components/Layout/Navbar";
import Drawer from "~/components/Layout/Drawer";
import {  userList } from "~/utils/menuItems";
import { Link, useLocation } from "@remix-run/react";
import { filterMenuByPermissions } from "~/utils/refactorMenuItems";
import { navbarHeightInPixels } from "~/utils/enum";
import Content from "~/components/Layout/Content";

interface OwnProps {
  children: React.ReactNode;
  user: any;
  menuItems: any;
}

type Props = OwnProps;

export const UserContext = React.createContext(null);

const Layout: FunctionComponent<Props> = (props) => {
  const { children, user,menuItems } = props;
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <Box sx={{ display: "flex" }}>
      <UserContext.Provider value={user}>
        <CssBaseline />
        <Navbar
          navbarHeight={navbarHeightInPixels}
          open={open}
          setOpen={setOpen}
        />
        <Drawer menuItems={menuItems} open={open} />
      </UserContext.Provider>
      <Content open={open} segments={segments}>{children}</Content>
    </Box>
  );
};

export default Layout;
