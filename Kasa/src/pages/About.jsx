import Header from "../components/Header/Header.jsx";
import AboutBanner from "../components/AboutBanner/AboutBanner.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import Footer from "../components/Footer/Footer.jsx";
import aboutData from "../assets/about.json";






const About = () =>{
    return(
        <>
        <Header />
        <AboutBanner />
        {aboutData.map((item) => (
        <Dropdown key={item.id} title={item.title} content={item.content} />
      ))}
        <Footer />
        </>
    )
}

export default About;