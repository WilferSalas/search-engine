// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";

// @scripts
import { useFetchMovie } from "../../api";

const DetailsPage = () => {
  const { id } = useParams();

  const { data } = useFetchMovie(id);

  return (
    <Box
      component={Container}
      id="details-information"
      sx={{ display: [null, "flex"], p: 5 }}
    >
      <Box id="details-info" sx={{ mx: 4 }}>
        <Typography id="details-title-typography" variant="h2">
          {data?.title}
        </Typography>
        <Typography id="details-description-typography" sx={{ mt: 5 }}>
          {data?.description}
        </Typography>
      </Box>
      <Box
        alt={data?.title}
        component="img"
        id="details-image"
        src={data?.image}
        sx={{
          maxWidth: [250, 350],
          pt: [5, 0],
          display: ["block", "flex"],
          m: "auto",
        }}
      />
    </Box>
  );
};

export default DetailsPage;
