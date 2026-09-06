import { useEffect, useState } from "react";
import CommentList from "../commentList/CommentList";
import AddComment from "../addComment/AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const apiUrl = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;
    const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNzAyYzg5ZGIxZTAwMTU1ZGEzMzMiLCJpYXQiOjE3ODgxNzg3MDksImV4cCI6MTc4OTM4ODMwOX0.IJOwXLoFebhX5D__QQwvOYBYiw0tZU7-I5TZ5P6llu0`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });
      
        const data = await response.json();
        setComments(data);
  
    } catch (e) {
      console.log(e);
    }
  };


   
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getComments();
  }, []);


  return (
    <>
      <CommentList comments={comments} getComments={getComments} />
      <AddComment getComments={getComments} asin={asin} />
    </>
  );
};

export default CommentArea;