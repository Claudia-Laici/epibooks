import SingleComment from "../singleComment/SingleComment";
import "./CommentList.css";

const CommentList = ({ comments, getComments }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>Non ci sono recensioni</p>
      ) : (
        comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            getComments={getComments}
          />
        ))
      )}
    </div>
  );
};

export default CommentList;