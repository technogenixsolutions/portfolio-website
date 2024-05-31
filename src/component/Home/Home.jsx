import Banner from "../Banner/Banner";
import AboutUs from "./AboutUs";
import BigFamily from "./BigFamily";
import BlogSection from "./BlogSection";
import ESSolutions from "./ESSolutions";
import LandingSection from "./LandingSection";
import MarketingSolution from "./MarketingSolution";
import MaxLogos from "./MaxLogos";
import OfficeLocations from "./OfficeLocations";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WeServeAll from "./WeServeAll";


const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <ESSolutions />
            <WeServeAll />
            <MaxLogos />
            <LandingSection className="section_padding_bottom section_padding_top" />
            <MarketingSolution  />
            <Testimonials />
            <BigFamily />
            <AboutUs />
            <BlogSection />
            <OfficeLocations />
        </>
    );
};

export default Home;