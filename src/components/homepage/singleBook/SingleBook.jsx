import { Card } from "react-bootstrap";
import { Link } from "react-router";
import "./SingleBook.css";

const SingleBook = ({ img, title, category, price, asin, selected, onBookClick }) => {
  return (
    <Card
      data-testid="BookCard"
      className={`BookCard ${selected === asin ? "selected" : ""}`}
      onClick={() => onBookClick(asin)}
    >
      <Card.Img
        variant="top"
        src={img}
        alt={title}
        className="book-image"
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{category}</Card.Text>

        <Card.Text>{`€ ${price.toFixed(2)}`}</Card.Text>

        <Link
          className="btn SingleBookButton"
          to={`/book/${asin}`}
          onClick={(e) => e.stopPropagation()}
        >
          Dettaglio
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
