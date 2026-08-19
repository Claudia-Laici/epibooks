import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import "./Welcome.css";

const Welcome = () => {
  return (
    <Container className="WelcomeContainer">
      <Alert className="AlertWelcome">
        <span className="WelcomeTitle">Benvenuto in EpiBooks!</span>
        <p className="m-0">
          La tua piattaforma di e-book preferita! Qui puoi esplorare una vasta
          gamma di libri digitali, scoprire nuovi autori e immergerti in mondi
          affascinanti. Buona lettura!
        </p>
      </Alert>
    </Container>
  );
};

export default Welcome;
