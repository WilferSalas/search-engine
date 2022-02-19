// @packages
import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

// @scripts
import HeaderComponent from "../components/header-coponent";

const Layout = () => (
  <Box id="layout">
    <HeaderComponent />
    <Outlet />
  </Box>
);

export default Layout;
