// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { SyntheticEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

// @scripts
import ListComponent from "../../components/list-component";
import SearchComponent from "../../components/search-compoent";
import { useFetchMovies, useFetchSimilar } from "../../api";

const HomePage = () => {
  const [value, setValue] = useState<string>("");

  const { data: movies, refetch: refetchMovies } = useFetchMovies(value);
  const { data: similar, refetch: refetchSimilar } = useFetchSimilar(value);

  const handleOnChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setValue(value);
    refetchSimilar();
  };

  const handleOnSelect = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setValue(value);
  };

  const handleOnSubmit = () => {
    refetchMovies();
  };

  return (
    <Container id="home-page">
      <Box
        animate={{ y: movies && movies?.length > 0 ? 0 : 130 }}
        component={motion.div}
        id="home-title"
        sx={{ mt: 6 }}
      >
        <Typography
          align="center"
          gutterBottom
          id="home-typography"
          sx={{ mb: 5 }}
          variant="h4"
        >
          Search Engine
        </Typography>
        <SearchComponent
          data={similar}
          id="home-page"
          onChange={handleOnChange}
          onSelect={handleOnSelect}
          onSubmit={handleOnSubmit}
          value={value}
        />
        {value && movies?.length == 0 && (
          <Typography variant="caption">
            No results found for: {value}
          </Typography>
        )}
      </Box>
      <Box sx={{ mt: 5 }}>
        {movies && <ListComponent data={movies} id="home-page" />}
      </Box>
    </Container>
  );
};

export default HomePage;
