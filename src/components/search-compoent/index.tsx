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
import Typography from "@mui/material/Typography";

// @interfaces
import { Movie } from "../../interfaces";

interface Props {
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
  onSubmit: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
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
        onKeyDown={(event) => event.key === "Enter" && onSubmit(event)}
        options={data?.map((option) => option.title) || []}
        value={value}
        renderInput={(params) => (
          <TextField
            placeholder="Search"
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
    {data?.length == 0 && (
      <Typography variant="caption">No results found for: {value}</Typography>
    )}
  </Box>
);

export default SearchComponent;
