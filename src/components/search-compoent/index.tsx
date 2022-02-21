// @packages
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { FC, SyntheticEvent } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

// @interfaces
import { Movie } from "../../interfaces";

export interface Props {
  data: Movie[];
  id: string;
  onChange: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void;
  onSelect: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => void;
  onSubmit: () => void;
  value: string;
}

const SearchComponent: FC<Props> = ({
  data,
  id,
  onChange,
  onSelect,
  onSubmit,
  value,
}) => (
  <Box>
    <Stack direction="row" id={`search-component-${id}`}>
      <Autocomplete
        autoComplete={false}
        disableClearable
        freeSolo
        fullWidth
        id={`search-input-${id}`}
        inputValue={value}
        onChange={onSelect}
        onInputChange={onChange}
        options={data?.map((option) => option.title) || []}
        value={value}
        renderInput={(params) => (
          <TextField
            placeholder="Search"
            onKeyDown={(event) => event.key === "Enter" && onSubmit()}
            {...params}
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
  </Box>
);

export default SearchComponent;
