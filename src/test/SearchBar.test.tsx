import React from "react";
import {
  fireEvent, getByPlaceholderText, getByTestId, render, screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import { QuerySearchContext } from "../context/QuerySearchContext";

const mockedUsedNavigate = jest.fn();
const mockOnSearch = jest.fn();
const mockUseParams = jest.fn(() => { "somethingFromParams"; });
const mockUseContext = React.useContext = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom") as any,
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUseParams,
}));

let container: any;
describe("SearchBar component", () => {
  beforeEach(() => {
    mockUseContext.mockReturnValue("something");
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("Should render properly, without redirect", () => {
    render(<SearchBar onSearch={mockOnSearch} shouldTriggerSearch={false} replaceOnSearch={false} />);
    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });

  it("Should not trigger search since there are no parameters", () => {
    render(<SearchBar onSearch={mockOnSearch} shouldTriggerSearch={false} replaceOnSearch={false} />);
    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it("Should NOT replace URL on click, with shouldTrigger on false", () => {
    render(<SearchBar onSearch={mockOnSearch} shouldTriggerSearch={false} replaceOnSearch />);
    const button = screen.getByTestId("button");
    button.click();
    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });

  it("Should not trigger field if the query is empty", () => {
    render(<SearchBar onSearch={mockOnSearch} shouldTriggerSearch replaceOnSearch />);
    const input = screen.getByTestId("input");
    const button = screen.getByTestId("button");
    button.click();
    expect(input).not.toHaveValue();
    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });

  it("Should trigger field if a query is given and keypress", () => {
    act(() => {
      ReactDOM.render(
        (
          <QuerySearchContext.Provider value={["something", jest.fn()]}>
            <SearchBar onSearch={mockOnSearch} shouldTriggerSearch={false} replaceOnSearch />
          </QuerySearchContext.Provider>
        ), container,
      );
    });
    const button = screen.getByTestId("button");
    button.click();
    expect(mockOnSearch).toBeCalled();
  });

  it("Should trigger use navigation if button is pressed", () => {
    render(<SearchBar onSearch={mockOnSearch} shouldTriggerSearch={false} replaceOnSearch />);
    const button = screen.getByTestId("brand");
    button.click();
    expect(mockedUsedNavigate).toBeCalledTimes(1);
  });
});
