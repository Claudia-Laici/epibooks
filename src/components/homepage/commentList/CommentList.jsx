import SingleComment from "../singleComment/SingleComment";
import "./CommentList.css";

const CommentList = ({ comments, getComments }) => {
  return (
    <ul className="CommentList">
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <SingleComment 
            key={comment._id} 
            comment={comment}          
            getComments={getComments}
          />
        ))
      ) : (
        <li className="list-group-item">Nessun commento presente.</li>
      )}
    </ul>
  );
};

export default CommentList;