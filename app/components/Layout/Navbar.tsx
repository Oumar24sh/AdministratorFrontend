import React, { FunctionComponent } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "~/assets/logo.svg";
import Breadcrum from "~/components/Breadcrum";
import { Form } from "@remix-run/react";
import { UserContext } from "~/components/Layout/index";
import { stringAvatar } from "~/utils";
import { HiOutlineLogout } from "react-icons/hi";

interface OwnProps {
  open: boolean;
  setOpen: any;
  navbarHeight: string;
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {
  const { open, setOpen, navbarHeight } = props;
  const _userContext = React.useContext(UserContext);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: navbarHeight }}
    >
      <Container maxWidth="xl" sx={{ padding: "0 16px 0 10px !important",mx:0,maxWidth:'100% !important' }}>
        <Toolbar disableGutters sx={{ py: "10px" }}>
          <Box
            sx={{
              width: open ? 220 : "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: open ? 50 : 25,
                ml: open ? "20px" : "10.5px",
                mr: open ? "20px" : "10.5px",
              }}
              alt="Beau Plan Logo"
              src={Logo}
            />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(!open)}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Breadcrum />
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ bgcolor: (theme) => theme.palette.primary.main }}
                  {...stringAvatar(
                      _userContext && _userContext?.firstName + " " + _userContext?.lastName ||
                      "H I"
                  )}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ width: 400, maxWidth: "100%",mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={!!anchorElUser}
              onClose={handleCloseUserMenu}
            >
              <Form action="/logout" method="post">
                <MenuItem component="button" type="submit" key={"logout"}>
                  <ListItemIcon>
                    <HiOutlineLogout fontSize={20} />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Form>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
