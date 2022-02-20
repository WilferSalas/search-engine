// @packages
import React from "react";
import { render, fireEvent } from "@testing-library/react";

// @scripts
import SearchComponent, { Props } from "../../components/search-compoent";

function renderSearchComponent(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    data: [],
    id: "test",
    onChange() {
      return;
    },
    onSelect() {
      return;
    },
    onSubmit() {
      return;
    },
    value: "",
  };

  return render(<SearchComponent {...defaultProps} {...props} />);
}

describe("<SearchComponent />", () => {
  test("should render without any error", async () => {
    renderSearchComponent();
  });
});
