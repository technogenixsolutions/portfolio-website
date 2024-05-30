import shape1 from "../../assets/image/Services/shape-icon1.png";
import shape2 from "../../assets/image/Services/shape-icon2.png";
import shape3 from "../../assets/image/Services/shape-icon3.png";
import shape4 from "../../assets/image/Services/shape-icon4.png";
import shape5 from "../../assets/image/Services/shape-icon5.png";
import shape6 from "../../assets/image/Services/shape-icon6.png";
import shape7 from "../../assets/image/Services/shape-icon7.png";

const WeServeAll = () => {
  return (
    <>
      <div className="section_padding_top section_padding_bottom">
        <div className="container">
          <div className="hexagons-title text-center">
            <h2 className="fs-48 fs-34-mob">We Serve All Industries</h2>
            <p className="fs-20 mt-6">
              We stay on top of our industry by being experts in yours.
            </p>
          </div>

          <div className="hex_1bx mt-12">
            <div className="ctm_hex_dv1" id="borer_bx_1">
              <div className="ctm_hex_dv2">
                <a href="#">
                  <div className="ctm_hex_dv3" id="bg_inner_bx1">
                    <img src={shape1} alt="Food Ordering Website" />
                    <span className="text-center fs-20 fw-500">
                      Hotel and Restaurant{" "}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="ctm_hex_dv1" id="borer_bx_2">
              <div className="ctm_hex_dv2">
                <a href="#">
                  <div className="ctm_hex_dv3" id="bg_inner_bx2">
                    <img src={shape2} alt="Treatment Healthcare logo" />
                    <span className="text-center fs-20 fw-500">
                      Healthcare{" "}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="ctm_hex_dv1" id="borer_bx_3">
              <div className="ctm_hex_dv2">
                <a href="#">
                  <div className="ctm_hex_dv3" id="bg_inner_bx3">
                    <img src={shape3} alt="Shopify icon" />
                    <span className="text-center  fs-20 fw-500">
                      E-commerce
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hex_2bx">
            <div className="ctm_hex_dv1" id="borer_bx_4">
              <div className="ctm_hex_dv2">
                <a href="https://www.aronwebsolutions.com/industries/real-estate">
                  <div className="ctm_hex_dv3" id="bg_inner_bx4">
                    <img src={shape4} alt="Construction Business" />
                    <span className="text-center fs-20 fw-500">
                      Real Estate{" "}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="ctm_hex_dv1" id="borer_bx_5">
              <div className="ctm_hex_dv2">
                <a href="https://www.aronwebsolutions.com/industries/travel">
                  <div className="ctm_hex_dv3" id="bg_inner_bx5">
                    <img src={shape5} alt="Travel logo" />
                    <span className="text-center fs-20 fw-500">Travel</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="ctm_hex_dv1" id="borer_bx_6">
              <div className="ctm_hex_dv2">
                <a href="https://www.aronwebsolutions.com/industries/education">
                  <div className="ctm_hex_dv3" id="bg_inner_bx6">
                    <img src={shape6} alt="Education logo" />
                    <span className="text-center fs-20 fw-500">
                      Education &amp; eLearning
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="ctm_hex_dv1" id="borer_bx_7">
              <div className="ctm_hex_dv2">
                <a href="https://www.aronwebsolutions.com/industries/events">
                  <div className="ctm_hex_dv3" id="bg_inner_bx7">
                    <img src={shape7} alt="Events logo" />
                    <span className="text-center fs-20 fw-500">Events</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeServeAll;
