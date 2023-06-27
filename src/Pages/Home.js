import { Row } from "reactstrap";
import Allanimes from "../Components/Allanimes";
import AnimeCarousel from "../Components/AnimeCarousel";
import Base from "../Components/Base";
import Trendingcard from "../Components/Trendingcard";
import "../Css/Allanimes.css"
import "../Css/Trending.css"


const Home = () => {

  return (
    <Base>
      <Row>
        <AnimeCarousel />
      </Row>
      <Row>
        <Trendingcard />
      </Row>
      <Row>
        <Allanimes />
      </Row>
    </Base>
  );
};

export default Home;
