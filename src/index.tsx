// @packages
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";

// @scripts
import MasterPage from "./pages/master-page";
import theme from "./styles/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MasterPage />
  </ThemeProvider>,
  document.querySelector("#root")
);
