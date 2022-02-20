// @packages
import Grid from "@mui/material/Grid";
import React, { FC } from "react";

// @scripts
import ListItem from "./ListItem";

// @interfaces
import { Movie } from "../../interfaces";

export interface Props {
  data: Movie[];
  id: string;
}

const ListComponent: FC<Props> = ({ data, id }) => (
  <Grid container id={`list-component-${id}`}>
    {data?.map(({ id, image, shortDescription, title }: Movie) => (
      <ListItem
        id={id}
        image={image}
        key={id}
        shortDescription={shortDescription}
        title={title}
      />
    ))}
  </Grid>
);

export default ListComponent;
