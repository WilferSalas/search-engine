// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { SyntheticEvent, useState } from "react";
import Typography from "@mui/material/Typography";

// @scripts
import ListComponent from "../../components/list-component";
import SearchComponent from "../../components/search-compoent";

// mock-data
import mockData from "../../data/mock/mock-data.json";

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

  const handleOnChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setValue(value);
  };

  const handleOnSelect = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (value) {
      setResults(
        [...mockData].filter((item) =>
          item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    } else {
      setResults(null);
    }
  };

  const handleOnSubmit = () => {
    if (value) {
      setResults(
        [...mockData].filter((item) =>
          item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    } else {
      setResults(null);
    }
  };

  return (
    <Container id="home-page" maxWidth="md">
      <Box id="home-title" sx={{ my: 4 }}>
        <Typography align="center" id="home-typography" variant="h4">
          Search Engine
        </Typography>
      </Box>
      <SearchComponent
        data={mockData}
        id="home-page"
        onChange={handleOnChange}
        onSelect={handleOnSelect}
        onSubmit={handleOnSubmit}
        value={value}
      />
      <Box sx={{ marginTop: 5 }}>
        {results && <ListComponent data={results} id="home-page" />}
      </Box>
    </Container>
  );
};

export default HomePage;
