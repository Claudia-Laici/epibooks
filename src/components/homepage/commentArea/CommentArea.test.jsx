import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import CommentArea from "./CommentArea";

const defaultCommentAreaProps = {
     asin: "12345678",
}

describe('CommentArea component', () => {
    it("should render correctly without a selected book", () => {
        render(
            <CommentArea />
        )

        const message = screen.getByText(
            "Seleziona un libro per vedere le recensioni."
        )

        expect(message).toBeInTheDocument()
        })
    it("should render reviews section when an ASIN is provided", () => {
        render(
            <CommentArea {...defaultCommentAreaProps} />
        )

        const label = screen.getByText("BOOK REVIEWS")
        const title = screen.getByText("Recensioni")

        expect(label).toBeInTheDocument()
        expect(title).toBeInTheDocument()
    })    
})