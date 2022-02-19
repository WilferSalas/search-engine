// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";

const DetailsPage = () => {
  useEffect(() => {
    // TODO - query details
  }, []);

  return (
    <Container id="home-page" maxWidth="md">
      <Box id="home-title" sx={{ my: 4 }}>
        <Typography align="center" id="home-typography" variant="h4">
          Details page
        </Typography>
      </Box>
    </Container>
  );
};

export default DetailsPage;
