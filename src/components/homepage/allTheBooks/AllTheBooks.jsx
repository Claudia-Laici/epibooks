import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useContext, useState } from "react";
import { SearchBookContext } from "../../../contexts/SearchBookContext";
import "./AllTheBooks.css";
import CommentArea from "../commentArea/CommentArea";

const AllTheBooks = () => {
  const { filteredBooks } = useContext(SearchBookContext);
  const [selected, setSelected] = useState(null);

  const handleBookClick = (asin) => {
    setSelected((prev) => (prev === asin ? null : asin));
  };

  return (
    <Container className="AllBooks">
      <Row>
        <Col xl={6}>
          <h2 className="AllBooksTitle">All The Books</h2>

          {filteredBooks.length === 0 ? (
            <p className="text-center my-4">
              Nessun libro trovato per questa ricerca.
            </p>
          ) : (
            <Row className="g-2">
              {filteredBooks.map((book) => (
                <Col key={book.asin} xs={12} md={4} lg={3} xl={4}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    onBookClick={handleBookClick}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>

        <Col xl={6}>
          <CommentArea asin={selected} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;