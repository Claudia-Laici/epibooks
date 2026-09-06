import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./SingleBook.css";
import CommentArea from "../commentArea/CommentArea";

const SingleBook = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="BookCard">
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="book-image"
        />

        <Card.Body className="book-body">
          <Card.Title className="book-title">{book.title}</Card.Title>
          <Card.Text className="book-price">€ {book.price.toFixed(2)}</Card.Text>

          <Button variant="outline-info" onClick={() => setShowModal(true)}>
            Vedi recensioni
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="bookModal">
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentArea asin={book.asin} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleBook;