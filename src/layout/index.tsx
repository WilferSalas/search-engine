// @packages
import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <Box>
    <Outlet />
  </Box>
);

export default Layout;
