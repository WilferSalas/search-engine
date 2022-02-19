// @packages
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { SyntheticEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";

// @scripts
import ListComponent from "../../components/list-component";
import SearchComponent from "../../components/search-compoent";

type item = {
  description: string;
  id: string;
  image: string;
  shortDescription: string;
  title: string;
};

const HomePage = () => {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<item[] | null>(null);

  const fetchMovies = async () => {
    if (value.length > 0) {
      return await axios
        .post("http://localhost:3001/api/v1/movies", {
          searchTerm: value,
        })
        .then((res) => res.data);
    }
  };

  const { data } = useQuery(["movies", value], fetchMovies);

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
      <Box sx={{ marginTop: 5 }}>
        {results && <ListComponent data={data} id="home-page" />}
      </Box>
    </Container>
  );
};

export default HomePage;
