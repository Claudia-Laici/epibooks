import { useContext } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { SearchBookContext } from "../../../contexts/SearchBookContext"

const SearchBar = () => {
  const {
    inputData,
    onChangeInput,
    onSearch,
  } = useContext(SearchBookContext)

  return (
    <Form onSubmit={onSearch}>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={inputData}
            onChange={onChangeInput}
            className="InputForm"
          />
        </Col>

        <Col xs="auto">
          <Button type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBar