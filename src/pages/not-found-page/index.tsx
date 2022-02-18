// @packages
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

const NotFoundPage = () => (
  <Box className="notFoundPage">
    <Box className="title">
      <Typography gutterBottom variant="h4" display="inline-flex">
        Page not found
      </Typography>
    </Box>
    <Typography>
      Maybe the page you are looking for has been removed, or you typed in the
      wrong URL
    </Typography>
  </Box>
);

export default NotFoundPage;
