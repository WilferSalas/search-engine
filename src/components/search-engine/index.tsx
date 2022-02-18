// @packages
import React, { FC } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

// mock-data
import data from "../../data/mock/mock-data.json";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
}

const SearchInput: FC<Props> = ({ onChange, onSubmit, value }) => (
  <Stack direction="row">
    <Autocomplete
      fullWidth
      disableClearable
      freeSolo
      id="free-solo-2-demo"
      options={data.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          value={value}
          onChange={onChange}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
    <Button variant="outlined" onClick={onSubmit}>
      Search
    </Button>
  </Stack>
);

export default SearchInput;
