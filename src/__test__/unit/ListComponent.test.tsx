// @packages
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// @scripts
import ListComponent, { Props } from "../../components/list-component";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

function renderListComponent(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    data: [
      {
        description:
          "Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
        id: "tt0110912",
        image: "https://i.imgur.com/63FNr2H.jpg",
        shortDescription:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        title: "Pulp Fiction",
      },
    ],
    id: "test-component",
  };

  return render(<ListComponent {...defaultProps} {...props} />);
}

describe("<ListComponent />", () => {
  test("should render a list with one movie", async () => {
    const { findByTestId } = renderListComponent();
    const title = await findByTestId("list-item-title");
    const description = await findByTestId("list-item-description");

    expect(title).toHaveTextContent("Pulp Fiction");
    expect(description).toHaveTextContent(
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    );
  });
});
