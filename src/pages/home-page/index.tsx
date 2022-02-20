// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { SyntheticEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

// @scripts
import ListComponent from "../../components/list-component";
import SearchComponent from "../../components/search-compoent";
import { useFetchMovies } from "../../api";

// @interfaces
import { Movie } from "../../interfaces";

const HomePage = () => {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<Movie[] | null>(null);

  const { data } = useFetchMovies(value);

  const handleOnChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setResults(null);
    setValue(value);
  };

  const handleOnSelect = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setValue(value);
    setResults(data);
  };

  const handleOnSubmit = () => {
    setResults(data);
  };

  return (
    <Container id="home-page">
      <Box
        animate={{ y: results ? 0 : 130 }}
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
          data={data}
          id="home-page"
          onChange={handleOnChange}
          onSelect={handleOnSelect}
          onSubmit={handleOnSubmit}
          value={value}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        {results && <ListComponent data={data} id="home-page" />}
      </Box>
    </Container>
  );
};

export default HomePage;
