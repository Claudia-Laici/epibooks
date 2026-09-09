import { Container, Row, Col } from "react-bootstrap";
import MyNav from "../navbar/MyNav";
import MyFooter from "../footer/MyFooter";
import LoadingIndicator from "../loadingIndicator/LoadingIndicator";
import { useParams } from "react-router";
import { useFetch } from "../../../hooks/useFetch";
import "./BookDetails.css";

const BookDetails = () => {
  const { asin } = useParams();

  const { isLoading, data, error } = useFetch(
    `https://epibooks.onrender.com/${asin}`,
  );

  return (
    <>
      <MyNav />
      <Container className="BookDetails">
        <Row>
          {isLoading && (
            <Col>
              <LoadingIndicator />
            </Col>
          )}
          {!isLoading && !error && data && (
            <Col>
              <div className="BookDetailsCard">
                <div className="BookDetailsImage">
                  <img alt={data[0].title} src={data[0].img} />
                </div>

                <div className="BookDetailsInfo">
                  <span className="BookDetailsCategory">
                    {data[0].category}
                  </span>

                  <h1>{data[0].title}</h1>

                  <div className="BookDetailsPrice">€ {data[0].price}</div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default BookDetails;
