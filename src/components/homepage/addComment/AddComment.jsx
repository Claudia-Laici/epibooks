import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, getComments }) => {
  const [inputComment, setInputComment] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputComment({
      ...inputComment,
      [name]: value,
    });
  };

  const onSubmitComment = async (e) => {
    e.preventDefault();
    const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNzAyYzg5ZGIxZTAwMTU1ZGEzMzMiLCJpYXQiOjE3ODgxNzg3MDksImV4cCI6MTc4OTM4ODMwOX0.IJOwXLoFebhX5D__QQwvOYBYiw0tZU7-I5TZ5P6llu0`;

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify(inputComment),
        },
      );

      if (response.ok) {
        await getComments();
        setInputComment({
          comment: "",
          rate: "",
          elementId: asin,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={onSubmitComment} className="CommentForm mt-3">
      <Form.Group className="mb-2">
        <Form.Control
          className="CommentInput"
          value={inputComment.comment}
          onChange={onChangeInput}
          type="text"
          placeholder="Inserisci il tuo commento..."
          name="comment"
          required
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Select
          className="CommentInput"
          value={inputComment.rate}
          onChange={onChangeInput}
          name="rate"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>

      <Button
        type="submit"
        variant="outline-info"
        size="sm"
        className="CommentButton"
      >
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
