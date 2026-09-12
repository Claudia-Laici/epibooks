import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AllTheBooks from "./AllTheBooks";
import App from "../../../App";

const selectedStyle = `
  .BookCard.selected {
    border-color: #00d9ff;
  }`;

describe("AllTheBooks component", () => {
  it("Books card render", async () => {
    render(<App />);
    const response = await fetch("https://epibooks.onrender.com");
    const data = await response.json();
    const bookCard = await screen.findAllByTestId("BookCard");
    console.log(data);
    expect(bookCard).toHaveLength(9);
  });
  it("should toggle selected class when a book is clicked", async () => {
    render(<App />);

    const bookImages = await screen.findAllByRole("img");
    const card = bookImages[0].parentElement;

    expect(card.className).not.toContain("selected");

    fireEvent.click(card);

    expect(card.className).toContain("selected");

    fireEvent.click(card);

    expect(card.className).not.toContain("selected");
  });
  it("should load 9 more Bootstrap cards when clicking the button", async () => {
    render(<App />);

    const bookCards = await screen.findAllByTestId("BookCard");
    expect(bookCards).toHaveLength(9);

    const button = screen.getByRole("button", {
      name: "Carica altri libri",
    });

    fireEvent.click(button);

    const newBookCards = screen.getAllByTestId("BookCard");

    expect(newBookCards).toHaveLength(18);
  });
  it("should select a book and deselect the previous one when another book is clicked", async () => {
    render(<App />);

    const style = document.createElement("style");

    style.textContent = selectedStyle;

    document.head.appendChild(style);

    const bookCards = await screen.findAllByTestId("BookCard");

    const firstCard = bookCards[0];
    const secondCard = bookCards[1];

    expect(firstCard.className).not.toContain("selected");
    const initialBorderColor = getComputedStyle(firstCard).borderColor;

    fireEvent.click(firstCard);

    const selectedBorderColor = getComputedStyle(firstCard).borderColor;
    expect(selectedBorderColor).toBe("rgb(0, 217, 255)");

    expect(firstCard.className).toContain("selected");

    fireEvent.click(secondCard);

    expect(firstCard.className).not.toContain("selected");
    expect(getComputedStyle(firstCard).borderColor).toBe(initialBorderColor);

    expect(secondCard.className).toContain("selected");

    expect(getComputedStyle(secondCard).borderColor).toBe("rgb(0, 217, 255)");
  });
  it("should not render SingleComment on initial load", async () => {
    render(<App />);

    await screen.findAllByTestId("BookCard");

    const singleComment = document.querySelector(".SingleComment");

    expect(singleComment).toBeNull();
  });
  it("should show comments when a book with comments is clicked", async () => {
    render(<App />);

    const bookCards = await screen.findAllByTestId("BookCard");

    const witcherCard = bookCards.find((card) =>
      card.textContent.includes("The Last Wish: Introducing the Witcher"),
    );

    fireEvent.click(witcherCard);

    const comments = await screen.findAllByTestId("SingleComment");

    expect(comments.length).toBeGreaterThan(0);
  });
});
