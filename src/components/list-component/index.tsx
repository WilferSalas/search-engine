// @packages
import Grid from "@mui/material/Grid";
import React, { FC } from "react";

// @scripts
import ListItem from "./ListItem";

interface Props {
  data: {
    description: string;
    id: string;
    image: string;
    shortDescription: string;
    title: string;
  }[];
  id: string;
}

type item = {
  description: string;
  id: string;
  image: string;
  shortDescription: string;
  title: string;
};

const ListComponent: FC<Props> = ({ data, id }) => (
  <Grid container id={`list-component-${id}`}>
    {data?.map(({ id, image, shortDescription, title }: item) => (
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
