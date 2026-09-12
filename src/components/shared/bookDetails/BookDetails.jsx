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
        <Row className="justify-content-center">
          {isLoading && (
            <Col xs={12} className="text-center">
              <LoadingIndicator />
            </Col>
          )}
          {!isLoading && !error && data && (
            <Col xs={11} sm={10} md={11} lg={12}>
              <div className="BookDetailsCard">
                <Row className="align-items-center justify-content-center g-4">
                  <Col xs={12} md={5} lg={4}>
                    <div className="BookDetailsImage">
                      <img alt={data[0].title} src={data[0].img} />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={7}
                    lg={8}
                    className="text-center text-md-start"
                  >
                    <div className="BookDetailsInfo">
                      <span className="BookDetailsCategory">
                        {data[0].category}
                      </span>
                      <h1>{data[0].title}</h1>
                      <div className="BookDetailsPrice">€ {data[0].price}</div>
                    </div>
                  </Col>
                </Row>
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
