import icon from "../../assets/image/icon_ul.png";
import img1 from "../../assets/image/landing-section/Landing-page-img.webp";

const LandingSection = () => {
  return (
    <>
      <div className="Landing_section section_ptb hmpage_landing_sec py-14">
        <div className="container">
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:order-1 order-2">
              <div className="text-white  pt-1 ">
                <h5 className="fw-400 fs-24 mt-2">Expertise..</h5>
                <h3 className="fs-48 fs-34-mob fw-400 lg:w-[62%] w-full leading-[50px] mt-5">
                  Landing Page Design, and Increase Conversion Rate
                </h3>
                <ul className="fs-20 mt-5 fw-300 my-14 pt-4">
                  <li className="flex items-center gap-1.5 mt-3">
                    <span>
                      <img src={icon} alt="icon" />
                    </span>
                    <span className="fs-18 hover:underline">High converting landing pages delivered within 72 hours.</span>
                  </li>

                  <li className="flex items-center gap-1.5 mt-3">
                    <span>
                      <img src={icon} alt="icon" />
                    </span>
                    <span className="fs-18 hover:underline">Boost your AOV, ROAS and overall revenue per session.</span>
                  </li>
                  
                  <li className="flex items-center gap-1.5 mt-3">
                  <span>
                    <img src={icon} alt="icon" />
                  </span>
                  <span className="fs-18 hover:underline">Cut the guesswork with our 11+ years experience.</span>
                   </li>
                </ul>
                <a
                  className="btn btn-primary btn-px-md text-white mt-4 mt-md-5"
                  href="landing-page"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <div className="landing_section_image h-100 w-100">
                <img
                  loading="lazy"
                  src={img1}
                  className="h-full w-full object-contain"
                  alt="Landing Page"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
