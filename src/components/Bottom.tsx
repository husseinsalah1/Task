import React from "react";
import { Container, Image } from "react-bootstrap";
import cart from "../assets/imgs/Cart.png";
import home from "../assets/imgs/Home 3.png";
export default function Bottom() {
  const data = [
    {
      image: cart,
      name: "السلة",
    },
    {
      image: cart,
      name: "طلباتي",
    },
    {
      image: "x",
      name: "الرئسية",
    },
    {
      image: cart,
      name: "المفضلة",
    },
    {
      image: cart,
      name: "حسابي",
    },
  ];
  return (
    <div className="bottom">
      <div className="home">
        <Image src={home} />
        <i></i>
      </div>
      <div className="menu">
        {" "}
        <Container className="items">
          {data.map((element) => {
            if (element.image === "x") {
              return (
                <div>
                  <div>
                    "<Image src={element.image} style={{ display: "none" }} />"
                  </div>
                  <strong style={{ color: "#FE9F15" }}>{element.name}</strong>
                </div>
              );
            }
            return (
              <div>
                <div>
                  <Image src={element.image} />
                </div>
                <strong>{element.name}</strong>
              </div>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
