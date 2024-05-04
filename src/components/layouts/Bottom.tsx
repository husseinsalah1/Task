import { Container, Image } from "react-bootstrap";
import cart from "../../assets/imgs/Cart.png";
import home from "../../assets/imgs/Home 3.png";
const Bottom = () => {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="71"
        viewBox="0 0 360 71"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M150.376 20.9664C142.356 11.0086 132.314 0 119.528 0L2 0C1.05719 0 0.585786 0 0.292893 0.292893C0 0.585786 0 1.05719 0 2V69C0 69.9428 0 70.4142 0.292893 70.7071C0.585786 71 1.05719 71 2.00001 71H358C358.943 71 359.414 71 359.707 70.7071C360 70.4142 360 69.9428 360 69V2C360 1.05719 360 0.585786 359.707 0.292893C359.414 0 358.943 0 358 0L240.473 0C227.687 0 217.645 11.0086 209.625 20.9664C202.722 29.5366 192.018 35.039 180 35.039C167.983 35.039 157.278 29.5366 150.376 20.9664Z"
          fill="#007BBF"
        />
      </svg>
    </div>
  );
  // return (
  //   <div className="bottom">
  //     <div className="home">
  //       <Image src={home} />
  //       <i></i>
  //     </div>
  //     <div className="menu">
  //       {" "}
  //       <Container className="items">
  //         {data.map((element) => {
  //           if (element.image === "x") {
  //             return (
  //               <div>
  //                 <div>
  //                   "<Image src={element.image} style={{ display: "none" }} />"
  //                 </div>
  //                 <strong style={{ color: "#FE9F15" }}>{element.name}</strong>
  //               </div>
  //             );
  //           }
  //           return (
  //             <div>
  //               <div>
  //                 <Image src={element.image} />
  //               </div>
  //               <strong>{element.name}</strong>
  //             </div>
  //           );
  //         })}
  //       </Container>
  //     </div>
  //   </div>
  // );
};

export default Bottom;
