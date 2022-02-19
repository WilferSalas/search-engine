// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

// mock-data
import mockData from "../../data/mock/mock-data.json";

type Item = {
  description: string;
  id: string;
  image: string;
  shortDescription: string;
  title: string;
};

const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Item | undefined>();

  useEffect(() => {
    const result = mockData.find((item) => item.id === id);

    setData(result);
  }, []);

  return (
    <Container id="details-page">
      <Box id="details-image" sx={{ my: 4, display: "flex" }}>
        <Box
          component="img"
          alt={data?.title}
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
