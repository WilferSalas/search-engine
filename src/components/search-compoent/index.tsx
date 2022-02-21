// @packages
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { ChangeEventHandler, FC } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export interface Props {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit: () => void;
  value: string;
}

const SearchComponent: FC<Props> = ({ id, onChange, onSubmit, value }) => (
  <Box>
    <Stack direction="row" id={`search-component-${id}`}>
      <TextField
        fullWidth
        id={`search-input-${id}`}
        onChange={onChange}
        onKeyDown={(event) => event.key === "Enter" && onSubmit()}
        value={value}
      />
      <Button variant="outlined" onClick={onSubmit}>
        Search
      </Button>
    </Stack>
  </Box>
);

export default SearchComponent;
