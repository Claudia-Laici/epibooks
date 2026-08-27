import { useState } from "react";
import books from "../../../data/scifi.json";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import "./AllTheBooks.css";

const AllTheBooks = () => {
  const [searchText, setSearchText] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.trim().toLowerCase()),
  );

  return (
    <Container className="AllBooks">
      <h2 className="AllBooksTitle">All The Books</h2>

       <Form.Control
        type="text"
        placeholder="Cerca un libro..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="mb-3 InputForm"
      />

      <Row className="g-2">
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} md={4} lg={3} xl={2}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
