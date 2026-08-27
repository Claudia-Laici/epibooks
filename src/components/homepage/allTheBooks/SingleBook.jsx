import { useState } from "react";
import { Card } from "react-bootstrap";
import "./SingleBook.css"


const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Card  className={`BookCard ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}>

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
  );
};

export default SingleBook;