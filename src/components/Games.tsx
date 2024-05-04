import { Button, Container, Figure } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gameImage from "../assets/imgs/Asset 57.png";
const Games = () => {
  const gamesData = [
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
    {
      name: "ببجي موبايل",
      image: gameImage,
    },
  ];
  return (
    <Container className="games_section">
      <Row>
        <Col xs={4}>
          <Button>عرض الكل</Button>
        </Col>
        <Col xs={{ span: 4, offset: 4 }} className="my_span">
          <span>الالعاب الرائجة</span>
        </Col>
      </Row>
      <Row className="games">
        {gamesData.map((game) => (
          <Col xs="3" md="6" lg="4">
            <Figure>
              <Figure.Image
                className="game_image"
                alt="171x180"
                src={game.image}
              />
              <Figure.Caption className="game_caption">
                {game.name}
              </Figure.Caption>
            </Figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Games;
