import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBookContext } from "../../../contexts/SearchBookContext";
import { SearchBookProvider } from "../../../contexts/SearchBookContext";
import { BooksContext } from "../../../contexts/BooksContext";
import { MemoryRouter } from "react-router";
import MyNav from "./MyNav";
import AllTheBooks from "../../homePage/allTheBooks/AllTheBooks";

const defaultTestBooks = [
  {
    img: "dune.jpg",
    title: "Dune",
    category: "sci-fi",
    price: 20,
    asin: "1",
  },
  {
    img: "foundation.jpg",
    title: "Foundation",
    category: "sci-fi",
    price: 18,
    asin: "2",
  },
  {
    img: "dune-messiah.jpg",
    title: "Dune Messiah",
    category: "sci-fi",
    price: 22,
    asin: "3",
  },
];

describe("MyNav component", () => {
  it("should render the search bar", () => {
    render(
      <SearchBookContext.Provider
        value={{
          inputData: "",
          onChangeInput: () => {},
          onSearch: () => {},
        }}
      >
        <MyNav />
      </SearchBookContext.Provider>,
    );

    const input = screen.getByPlaceholderText("Search...");

    expect(input).toBeInTheDocument();
  });
  it("the user enters a search in the Navbar", () => {
    render(
      <BooksContext.Provider
        value={{
          booksData: defaultTestBooks,
        }}
      >
        <SearchBookProvider>
          <MyNav />
        </SearchBookProvider>
      </BooksContext.Provider>,
    );

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, {
      target: { value: "Dune" },
    });

    expect(input).toHaveValue("Dune");

    const button = screen.getByRole("button", {
      name: "Search",
    });

    fireEvent.click(button);
  });
  it("verify that the search produced the correct filter", () => {
    render(
      <MemoryRouter>
        <BooksContext.Provider
          value={{
            booksData: defaultTestBooks,
          }}
        >
          <SearchBookProvider>
            <MyNav />
            <AllTheBooks />
          </SearchBookProvider>
        </BooksContext.Provider>
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, {
      target: { value: "Dune" },
    });

    expect(input).toHaveValue("Dune");

    const button = screen.getByRole("button", {
      name: "Search",
    });

    fireEvent.click(button);
    const elements = screen.getAllByRole("img");
    expect(elements).toHaveLength(2);

    expect(screen.getByText("Dune")).toBeInTheDocument();
    expect(screen.getByText("Dune Messiah")).toBeInTheDocument();
    expect(screen.queryByText("Foundation")).not.toBeInTheDocument();
  });
  it("should show no books when the search matches nothing", () => {
  render(
    <MemoryRouter>
      <BooksContext.Provider value={{ booksData: defaultTestBooks }}>
        <SearchBookProvider>
          <MyNav />
          <AllTheBooks />
        </SearchBookProvider>
      </BooksContext.Provider>
    </MemoryRouter>,
  );

  const input = screen.getByPlaceholderText("Search...");
  fireEvent.change(input, { target: { value: "xxxxxxx" } });

  const button = screen.getByRole("button", { name: "Search" });
  fireEvent.click(button);

  expect(screen.queryAllByRole("img")).toHaveLength(0);
});
});
