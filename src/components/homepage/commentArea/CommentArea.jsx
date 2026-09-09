import CommentList from "../commentList/CommentList";
import AddComment from "../addComment/AddComment";
import LoadingIndicator from "../../shared/loadingIndicator/LoadingIndicator";
import { useFetch } from "../../../hooks/useFetch";
import "./CommentArea.css";

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNzAyYzg5ZGIxZTAwMTU1ZGEzMzMiLCJpYXQiOjE3ODg3MTA3MTksImV4cCI6MTc4OTkyMDMxOX0.yz7sJFGvfiSYqAn6DmMTPQnTQ3sLd7choto0Xz1Tugo";

const CommentArea = ({ asin }) => {
  const {
    isLoading,
    data: comments,
    error,
    fetchData: getComments,
  } = useFetch(
    asin ? `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/` : null,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );

  return (
    <div className="CommentArea">
      {asin ? (
        <>
          <div className="CommentHeader">
            <span className="CommentLabel">BOOK REVIEWS</span>
            <h5>Recensioni</h5>
          </div>

          {isLoading && <LoadingIndicator />}

          {!isLoading && !error && (
            <>
              <CommentList
                comments={comments || []}
                getComments={getComments}
              />
              <AddComment asin={asin} getComments={getComments} />
            </>
          )}
        </>
      ) : (
        <div className="CommentEmpty">
          <p>Seleziona un libro per vedere le recensioni.</p>
        </div>
      )}
    </div>
  );
};

export default CommentArea;