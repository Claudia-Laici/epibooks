import { Card } from "react-bootstrap";
import { Link } from "react-router";
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

      <Card.Body>
        <Card.Title>{book.title}</Card.Title>

        <Card.Text>€ {book.price.toFixed(2)}</Card.Text>

        <Link
          className="btn SingleBookButton"
          to={`/book/${book.asin}`}
          onClick={(e) => e.stopPropagation()}
        >
          Dettaglio
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
