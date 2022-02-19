// @packages
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const DetailsPage = () => {
  const { id } = useParams();

  const fetchMovie = async () => {
    return await axios(`http://localhost:3001/api/v1/movies/${id}`).then(
      (res) => res.data
    );
  };

  const { data } = useQuery("movie-details", fetchMovie);

  return (
    <Container id="details-page">
      <Box id="details-information" sx={{ my: 4, display: "flex" }}>
        <Box
          alt={data?.title}
          component="img"
          id="details-image"
          src={data?.image}
          sx={{ maxWidth: 400 }}
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
