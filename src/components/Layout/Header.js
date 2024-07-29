import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Handle drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle logout
  const handleLogout = () => {
    // Perform logout logic, e.g., clear auth tokens
    // localStorage.removeItem('token'); // Example: Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }}>
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/menu"}>Menu</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><Button onClick={handleLogout} color="inherit">Logout</Button></li> {/* Logout button */}
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1201 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/menu"}>Menu</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><Button onClick={handleLogout} color="inherit">Logout</Button></li> {/* Logout button */}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
