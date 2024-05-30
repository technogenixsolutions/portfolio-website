import Banner from "../Banner/Banner";
import ESSolutions from "./ESSolutions";
import LandingSection from "./LandingSection";
import MarketingSolution from "./MarketingSolution";
import MaxLogos from "./MaxLogos";
import Services from "./Services";
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
        </>
    );
};

export default Home;