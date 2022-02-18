// @packages
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// @scripts
import SearchInput from "../../components/search-engine";

const HomePage = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnSubmit = () => {
    // TODO - submit logic
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography align="center" variant="h4">
          Search Engine
        </Typography>
      </Box>
      <SearchInput
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        value={value}
      />
    </Container>
  );
};

export default HomePage;
