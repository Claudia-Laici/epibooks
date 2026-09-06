import { Card } from "react-bootstrap";
import "./SingleBook.css";

const SingleBook = ({ book, selected, onBookClick }) => {
  return (
    <Card
      className={`BookCard ${selected === book.asin ? "selected" : ""}`}
      onClick={() => onBookClick(book.asin)}
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        className="book-image"
      />

      <Card.Body className="book-body">
        <Card.Title className="book-title">
          {book.title}
        </Card.Title>

        <Card.Text className="book-price">
          € {book.price.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;