import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import data from "../assets/Location.json";
import { Link } from "react-router-dom"






const Home = () =>{
    return(
        <>
        <Header />
        <Banner />
        <div className="card-container">
        {data.map((appart, id) => (
  <Link className="link_card_logement" to={`/logement/${appart.id}`} key={id}>
    <Cards cover={appart.cover} title={appart.title} />
  </Link>
))}
      </div>
        <Footer />
        </>
      
    )
}

export default Home;