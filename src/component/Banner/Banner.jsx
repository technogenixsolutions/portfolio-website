const Banner = () => {
  return (
    <section className="banner-area section_padding_top section_padding_bottom">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <div className="banner-content">
              <h2 className="banner-title">
                Make YourDream Website with Our Wix Partners
              </h2>
              <h3 className="banner-sub-title">
                Optimize your Online store &amp; generate more revenue
              </h3>
              <div className="flex items-center gap-6">
                <div className="hmpage_btns">
                  <a href="#" className="btn home-banner-btn">
                    Start My Shopify Project
                  </a>
                </div>
                <div className="count_up_nmbrs_outer d-flex flex-column">
                  <div className="d-flex flex-row num_cntng_mob">
                    <p className="count_up_nmbrs">
                      2496<span className="plus-text">+</span>
                    </p>
                  </div>
                  <div>
                    <p className="Completed_text">Completed Wix Websites</p>
                  </div>
                </div>
              </div>
              <div className="hindustan_times_logo flex items-center gap-6 mt-8">
                <a href="#" target="_blank" className="slider_icon_lkone">
                  <img
                    src="https://www.aronwebsolutions.com/public/slider/shopify_partners-2.webp"
                    className="slider_icon_imgone"
                    alt="Shopify Partner"
                  />
                </a>
                <span className="shopify_exp_mid_line middle_line"></span>
                <a href="#" target="_blank" className="slider_icon_lktwo">
                  <img
                    src="https://www.aronwebsolutions.com/public/slider/clutch_shopify-2.webp"
                    className="slider_icon_imgtwo"
                    alt="Clutch Rating"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="banner-img">
              <img
                src="https://www.aronwebsolutions.com/public/slider/webflow%20copy.webp"
                alt="banner-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
 