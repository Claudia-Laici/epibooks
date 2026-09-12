import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "../../../App";

describe("Welcome component", () => {
  it("should render correctly", () => {
    render(<App />);

    const welcome = screen.getByText("Benvenuto in EpiBooks!");

    expect(welcome).toBeInTheDocument();
   
  });
});
