// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

// @scripts
import ListComponent from "../../components/list-component";
import SearchComponent from "../../components/search-compoent";
import { useFetchMovies } from "../../api";

const HomePage = () => {
  const [value, setValue] = useState<string>("");

  const { data: movies, refetch: refetchMovies } = useFetchMovies(value);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnSubmit = () => {
    if (value.length > 0) return refetchMovies();
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
          id="home-page"
          onChange={handleOnChange}
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
