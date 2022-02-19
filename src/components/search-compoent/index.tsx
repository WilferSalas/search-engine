// @packages
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import React, { FC, SyntheticEvent } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

interface Props {
  data: {
    description: string;
    id: string;
    image: string;
    shortDescription: string;
    title: string;
  }[];
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
  <Stack direction="row" id={`search-component-${id}`}>
    <Autocomplete
      disableClearable
      freeSolo
      fullWidth
      id={`search-input-${id}`}
      onChange={onSelect}
      inputValue={value}
      onInputChange={onChange}
      options={data.map((option) => option.title)}
      value={value}
      onKeyDown={(event) => event.key === "Enter" && onSubmit(event)}
      autoComplete={false}
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
);

export default SearchComponent;
