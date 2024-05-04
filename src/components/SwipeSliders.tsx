import { Virtual } from "swiper/modules";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import MyCard from "./MyCard";
import { Container } from "react-bootstrap";

const SwipeSliders = () => {
  const slides = [
    <MyCard />,
    <MyCard />,
    <MyCard />,
    <MyCard />,
    <MyCard />,
    <MyCard />,
  ];
  console.log(slides);
  return (
    <>
      <Container className="my_swiper">
        <Row>
          <Col xs={{ span: 5, offset: 7 }} className="my_span">
            <span> أكواد خصم شركائنا</span>
          </Col>
        </Row>
        <Swiper
          className="swipe"
          modules={[Virtual]}
          spaceBetween={12}
          slidesPerView={3.5}
          virtual
        >
          {slides.map((slideContent, index) => (
            <Col key={index} style={{ background: "red" }}>
              <SwiperSlide virtualIndex={index}>{slideContent}</SwiperSlide>
            </Col>
          ))}
        </Swiper>
        <Swiper
          className="swipe"
          modules={[Virtual]}
          spaceBetween={12}
          slidesPerView={3.5}
          virtual
        >
          {slides.map((slideContent, index) => (
            <Col key={index}>
              <SwiperSlide
                style={{ background: "red !important" }}
                virtualIndex={index}
              >
                {slideContent}
              </SwiperSlide>
            </Col>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default SwipeSliders;
