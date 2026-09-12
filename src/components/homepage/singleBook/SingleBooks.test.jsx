import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import SingleBook from "./SingleBook";
import { BooksProvider } from "../../../contexts/BooksContext.jsx";
import { MemoryRouter } from "react-router";

const defaultBookProps = {
  img: "test.jpg",
  title: "Book test",
  category: "fantasy",
  price: 200,
  asin: "12345678",
};

describe("SingleBook component", () => {
  it("should render book data correctly", () => {
    render(
      <MemoryRouter>
        <BooksProvider>
          <SingleBook {...defaultBookProps} />
        </BooksProvider>
      </MemoryRouter>,
    );
    const imgElement = screen.getByRole("img");
    const titleElement = screen.getByText("Book test");
    const categoryElement = screen.getByText("fantasy");
    const priceElement = screen.getByText("€ 200.00");

    expect(imgElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
  it("should render the link to the detail page correctly", () => {
    render(
      <MemoryRouter>
        <BooksProvider>
          <SingleBook {...defaultBookProps} />
        </BooksProvider>
      </MemoryRouter>,
    );

    const element = screen.getByRole("link");

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("href", "/book/12345678");
  });
});
