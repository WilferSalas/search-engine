// @packages
import React from "react";
import { render } from "@testing-library/react";

// @scripts
import SearchComponent, { Props } from "../../components/search-compoent";

function renderSearchComponent(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    id: "test",
    onChange() {
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
