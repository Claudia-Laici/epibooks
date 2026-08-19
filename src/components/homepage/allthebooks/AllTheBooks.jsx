import books from "../../../data/scifi.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AllTheBooks.css";

const AllTheBooks = () => {
  return (
    <Container className="AllBooks">

      <h2 className="AllBooksTitle">
        All The Books
      </h2>

      <Row className="g-2">

        {books.map((book) => (
          <Col
            key={book.asin}
            xs={12}
            md={4}
            lg={3}
            xl={2}
          >
            <Card className="BookCard">

              <Card.Img
                variant="top"
                src={book.img}
                alt={book.title}
              />

              <Card.Body>

                <Card.Title>
                  {book.title}
                </Card.Title>

                <Card.Text>
                  € {book.price.toFixed(2)}
                </Card.Text>

              </Card.Body>

            </Card>
          </Col>
        ))}

      </Row>

    </Container>
  );
};

export default AllTheBooks;