// @packages
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  image: string;
  shortDescription: string;
  title: string;
}

const ListItem: FC<Props> = ({ id, image, title, shortDescription }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Paper container component={Grid} sx={{ margin: "5px 0" }}>
      <Grid item xs={2} sx={{ textAlign: "center", display: "flex" }}>
        <Box
          component="img"
          alt={title}
          src={image}
          sx={{ maxWidth: "100%" }}
        />
      </Grid>
      <Grid item xs={10} sx={{ padding: 2 }}>
        <Typography
          component={Link}
          gutterBottom
          onClick={handleOnClick}
          sx={{ cursor: "pointer" }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography>{shortDescription}</Typography>
      </Grid>
    </Paper>
  );
};

export default ListItem;
