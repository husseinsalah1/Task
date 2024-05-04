import { Container, Form, Image } from "react-bootstrap";
import search from "../assets/imgs/Search 13x.png";
const SearchBox = () => {
  return (
    <Container className="search_box">
      <i>
        <Image src={search} />
      </i>

      <Form.Control
        size="sm"
        type="text"
        placeholder="ادخل كلمة البحث"
        className="search_input"
      />
    </Container>
  );
};

export default SearchBox;
