import { Button, Image } from "react-bootstrap";
import copImage from "../assets/imgs/image 23.png";
export default function MyCard() {
  return (
    <div className="coupon">
      <div className="content">
        <div className="img">
          <Image src={copImage} />
        </div>
        <div className="offer">
          10% / <span>5%</span>
        </div>
        <div className="button">
          <Button>عرض التفاصيل</Button>
        </div>
      </div>
    </div>
  );
}
