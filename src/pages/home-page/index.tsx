// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { SyntheticEvent, useState } from "react";
import Typography from "@mui/material/Typography";

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
      <Box id="home-title" sx={{ my: 4 }}>
        <Typography align="center" id="home-typography" variant="h4">
          Search Engine
        </Typography>
      </Box>
      <SearchComponent
        data={data || []}
        id="home-page"
        onChange={handleOnChange}
        onSelect={handleOnSelect}
        onSubmit={handleOnSubmit}
        value={value}
      />
      <Box sx={{ mt: 5 }}>
        {results && <ListComponent data={data} id="home-page" />}
      </Box>
    </Container>
  );
};

export default HomePage;
