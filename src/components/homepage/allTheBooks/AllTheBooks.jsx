import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useContext } from "react";
import { SearchBookContext } from "../../../contexts/SearchBookContext"; 
import "./AllTheBooks.css";

const AllTheBooks = () => {
  const { filteredBooks } = useContext(SearchBookContext);

  return (
    <Container className="AllBooks">
      <h2 className="AllBooksTitle">All The Books</h2>
      {filteredBooks.length === 0 ? (
        <p className="text-center my-4">Nessun libro trovato per questa ricerca.</p>
      ) : (
        <Row className="g-2">
          {filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} md={4} lg={3} xl={2}>
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
      )}
    </Container>
  );
};

export default AllTheBooks;
