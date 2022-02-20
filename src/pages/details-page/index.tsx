// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

// @scripts
import { useFetchMovie } from "../../api";

const DetailsPage = () => {
  const { id } = useParams();

  const { data } = useFetchMovie(id);

  return (
    <Container id="details-page">
      <Box id="details-information" sx={{ my: 2, display: [null, "flex"] }}>
        <Box
          alt={data?.title}
          component="img"
          id="details-image"
          src={data?.image}
          sx={{
            maxWidth: [250, 400],
            pb: 2,
            display: ["block", "flex"],
            m: "auto",
          }}
        />
        <Box id="details-info" sx={{ mx: 4 }}>
          <Typography gutterBottom id="details-title-typography" variant="h4">
            {data?.title}
          </Typography>
          <Typography id="details-description-typography">
            {data?.description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailsPage;
