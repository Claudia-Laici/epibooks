import { Container, Row, Col, Button } from "react-bootstrap";
import SingleBook from "../singleBook/SingleBook";
import { useContext, useState, useEffect } from "react";
import { SearchBookContext } from "../../../contexts/SearchBookContext";
import CommentArea from "../../homePage/commentArea/CommentArea";
import { BooksContext } from "../../../contexts/BooksContext";
import LoadingIndicator from "../../shared/loadingIndicator/LoadingIndicator";
import "./AllTheBooks.css";

const AllTheBooks = () => {
  const { filteredBooks, searchData } = useContext(SearchBookContext);
  const { isLoading } = useContext(BooksContext);
  const [selected, setSelected] = useState(null);
  const BooksOnPage = 9;
  const [visibleCount, setVisibleCount] = useState(BooksOnPage);

  const handleBookClick = (asin) => {
    setSelected((prev) => (prev === asin ? null : asin));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + BooksOnPage);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(BooksOnPage);
  }, [searchData]);

  const booksToShow = filteredBooks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBooks.length;

  return (
    <Container className="AllBooks">
      <h2 className="AllBooksTitle">All The Books</h2>

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Row>
          <Col xl={6}>
            {filteredBooks.length === 0 ? (
              <p className="text-center my-4">
                Nessun libro trovato per questa ricerca.
              </p>
            ) : (
              <>
                <Row className="g-2">
                  {booksToShow.map((book) => (
                    <Col key={book.asin} xs={12} md={4} lg={3} xl={4}>
                      <SingleBook
                        book={book}
                        selected={selected}
                        onBookClick={handleBookClick}
                      />
                    </Col>
                  ))}
                </Row>

                {hasMore && (
                  <div className="d-flex justify-content-center my-4">
                    <Button className="BtnMore" onClick={handleLoadMore}>
                      Carica altri libri
                    </Button>
                  </div>
                )}
              </>
            )}
          </Col>

          <Col xl={6}>
            <CommentArea asin={selected} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AllTheBooks;
