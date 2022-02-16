import React from "react";
import { render, screen } from "@testing-library/react";
import ResultsTable from "../components/Results/ResultsTable/ResultsTable";

const mockedUsedNavigate = jest.fn();

const itemExmaple = {
  id: "0",
  photo: "https://random.doc/picture/v909200932/random.png",
  title: "Random title",
  description: "Lorem ipsum",
  shortDescription: "Lorem ipsum",
};

const mockResults = [
  itemExmaple,
  itemExmaple,
  itemExmaple,
  itemExmaple,
  itemExmaple,
  itemExmaple,
  itemExmaple,
  itemExmaple,
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom") as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("Results table", () => {
  it("Should render properly with no context", () => {
    render(<ResultsTable results={undefined as any} />);
    const emptyResults = screen.getByTestId("empty-result");
    expect(emptyResults).toBeInTheDocument();
  });

  it("Should render the classes properly if length > 7", () => {
    render(<ResultsTable results={mockResults as any} />);
    const resultsWrapper = screen.getByTestId("results-wrapper");
    expect(resultsWrapper).toBeInTheDocument();
  });

  it("Should have the proper class if needs to scroll", () => {
    render(<ResultsTable results={mockResults as any} />);
    const resultsWrapper = screen.getByTestId("results-wrapper");
    expect(resultsWrapper.className).toContain("odl-resultstable enable--scroll");
  });
});
