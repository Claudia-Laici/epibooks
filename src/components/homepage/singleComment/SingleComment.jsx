import { Badge, CardBody, Button, CardText } from "react-bootstrap"
import "./SingleComment.css"

const SingleComment = ({ comment, getComments }) => {
    const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNzAyYzg5ZGIxZTAwMTU1ZGEzMzMiLCJpYXQiOjE3ODgxNzg3MDksImV4cCI6MTc4OTM4ODMwOX0.IJOwXLoFebhX5D__QQwvOYBYiw0tZU7-I5TZ5P6llu0`;
    const onDeleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      if (response.ok) {
        await getComments();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CardBody className="SingleComment">
      <CardText>
        <Badge>Recensione</Badge>
        <br />
        {comment.comment}
      </CardText>

      <CardText className="AuthorComment">
        <Badge>Autore</Badge>
        <br />
        {comment.author}
      </CardText>

      <CardText className="CommentMeta">
        <Badge>Valutazione</Badge>
        <br />
        {comment.rate}
      </CardText>

      <Button onClick={onDeleteComment} className="BtnDeleteComment">
        Elimina
      </Button>
    </CardBody>
  );
};

export default SingleComment;