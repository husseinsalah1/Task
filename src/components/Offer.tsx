import React from "react";
import { Container, Image } from "react-bootstrap";

import offer from "../assets/imgs/بانر.png";
const Offer = () => {
  return (
    <Container className="offer_img">
      <Image src={offer} />
    </Container>
  );
};

export default Offer;
