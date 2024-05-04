import Navigation from "./layouts/Navigation";
import SearchBox from "./SearchBox";
import Offer from "./Offer";
import Games from "./Games";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fancyapps/ui/dist/carousel/carousel.css";
import SwipeSliders from "./SwipeSliders";
import Footer from "./layouts/Footer";
import Bottom from "./Bottom";

export default function App() {
  return (
    <div>
      <Navigation />
      <SearchBox />
      <Offer />
      <Games />
      <SwipeSliders />
      <Footer />
      <Bottom />
    </div>
  );
}
