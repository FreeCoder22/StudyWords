import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { DrawerProps } from "../../types/PropsType";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import GamesIcon from '@mui/icons-material/Games';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;


function DrawerRoot({ t }: DrawerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("navbarWeb.home")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton onClick={() => navigate("/Word")}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={t("navbarWeb.wordStudy")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton onClick={() => navigate("/wordLearned")}>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary={t("navbarWeb.wordLearned")} />
          </ListItemButton>
        </ListItem>
        <ListItem key={4} disablePadding>
          <ListItemButton onClick={() => navigate("/RandomWord")}>
            <ListItemIcon>
              <GamesIcon />
            </ListItemIcon>
            <ListItemText primary={t("navbarWeb.randomWord")} />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        <ListItem key={5} disablePadding>
          <ListItemButton onClick={() => navigate("/settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={t("navbarWeb.settings")} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {t("title")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
          <div id="detail">
            <Outlet />
          </div>
      </Box>
    </Box>
  );
}

export default withTranslation()(DrawerRoot);
