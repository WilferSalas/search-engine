// @packages
import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

interface Props {
  image: string;
  shortDescription: string;
  title: string;
}

const ListItem: FC<Props> = ({ image, title, shortDescription }) => (
  <Paper container component={Grid} sx={{ margin: "10px 0" }}>
    <Grid item xs={2} sx={{ textAlign: "center", display: "flex" }}>
      <img alt={title} src={image} style={{ maxWidth: 130 }} />
    </Grid>
    <Grid item xs={10} sx={{ padding: 2 }}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography>{shortDescription}</Typography>
    </Grid>
  </Paper>
);

export default ListItem;
