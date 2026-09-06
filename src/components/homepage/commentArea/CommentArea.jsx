import { useEffect, useState } from "react";
import CommentList from "../commentList/CommentList";
import AddComment from "../addComment/AddComment";
import "./CommentArea.css";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    if (!asin) return;

    console.log("GET COMMENTI PER ASIN:", asin);

    const apiUrl = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;

    const apiToken =
      "IL_TUO_TOKEN";

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      console.log("Status GET:", response.status);

      const data = await response.json();

      console.log("Dati ricevuti:", data);

      setComments(data);
    } catch (e) {
      console.log("Errore fetch:", e);
    }
  };

  useEffect(() => {
    if (asin) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      getComments();
    } else {
      setComments([]);
    }
  }, [asin]);

  return (
    <div className="CommentArea">
      {asin ? (
        <>
          <div className="CommentHeader">
            <span className="CommentLabel">BOOK REVIEWS</span>
            <h5>Recensioni</h5>
          </div>

          <CommentList
            comments={comments}
            getComments={getComments}
          />

          <AddComment
            asin={asin}
            getComments={getComments}
          />
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