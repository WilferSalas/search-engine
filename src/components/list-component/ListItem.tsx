// @packages
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// @interfaces
import { Movie } from "../../interfaces";

const ListItem: FC<Movie> = ({ id, image, title, shortDescription }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Paper container component={Grid} sx={{ my: 1 }}>
      <Grid item xs={4} md={2} sx={{ display: "flex" }}>
        <Box
          component="img"
          alt={title}
          src={image}
          sx={{ maxWidth: "100%" }}
        />
      </Grid>
      <Grid item xs={8} md={10} sx={{ p: 2 }}>
        <Typography
          component={Link}
          data-testid="list-item-title"
          gutterBottom
          onClick={handleOnClick}
          sx={{ cursor: "pointer" }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography data-testid="list-item-description">
          {shortDescription}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default ListItem;
