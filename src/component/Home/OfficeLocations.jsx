const OfficeLocations = () => {
  return (
    <section className="bg-[#c8d9e1] section_ptb hidden md:block mt-48">
      <div className="container">
        <div className="map_heading text-center mb-5">
          <h3 className="text-4xl md:text-5xl">Our Office Locations</h3>
          <p className="text-xl">Visit us at Our Global Location Hub</p>
        </div>
        <div className="custom_inner_map relative">
          <div className="custom_inner_map_image">
            <img
              src="https://www.aronwebsolutions.com/public/front/images/aws-map.png"
              className="w-full h-full object-contain"
              alt="World Map"
            />
          </div>

          <div className="map_pin1 absolute">
            <div className="relative ctm_pin">
              <img
                src="public/front/images/map-pin.png"
                alt="map pin"
              />
              <a
                href="#"
                target="_blank"
                className="text-dark"
              ></a>
              <div className="hidden lg:block show_on_hover_office absolute bg-white p-3 rounded hide_img">
                <a
                  href="#"
                  target="_blank"
                  className="text-dark"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="map_flag uk_flag"
                      src="public/front/images/usa_flag.webp"
                      data-image-src="public/front/images/usa_flag.webp"
                      alt="USA FLAG"
                    />
                    <h5 className="m-0 uppercase text-lg">United States</h5>
                  </div>
                  <p className="text-sm m-0">1242 Monte Vista Ave #2,</p>
                  <p className="text-sm m-0">
                    Upland, CA 91786, United States.
                  </p>
                </a>
                <a
                  className="sec-clr underline"
                  href="mailto:sales@aronwebsolutions.com"
                ></a>
                <button className="floating_button absolute lg:hidden cros_btn">
                  ×
                </button>
              </div>
            </div>
          </div>

          <div className="map_pin2 absolute">
            <div className="relative ctm_pin">
              <img src="public/front/images/map-pin.png" alt="map pin" />
              <a href="#" target="_blank" className="text-dark"></a>
              <div className="hidden lg:block show_on_hover_office absolute bg-white p-3 rounded hide_img">
                <a href="#" target="_blank" className="text-dark">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="map_flag uk_flag"
                      src="public/front/images/uk_flag.webp"
                      alt="Uk FLAG"
                    />
                    <h5 className="m-0 uppercase text-lg">United Kingdom</h5>
                  </div>
                  <p className="text-sm m-0">Manchester, United Kingdom</p>
                  <p className="text-sm m-0">Quay St, M3.</p>
                </a>
                <a
                  className="sec-clr underline"
                  href="mailto:sales@aronwebsolutions.com"
                ></a>
                <button className="floating_button absolute lg:hidden cros_btn">
                  ×
                </button>
              </div>
            </div>
          </div>

          <div className="map_pin3 absolute">
            <div className="relative pin_3_ctm">
              <img
                src="public/front/images/map-pin.png"
                alt="map pin"
              />
              <a href="#" target="_blank" className="text-dark"></a>
              <div className="hidden lg:block show_on_hover_office absolute bg-white p-3 rounded hide_img">
                <a href="#" target="_blank" className="text-dark">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="map_flag indian_flag"
                      src="public/front/images/indian_flag.webp"
                      alt="India FLAG"
                    />
                    <h5 className="m-0 uppercase text-lg">India</h5>
                  </div>
                  <p className="text-sm m-0">F 177, 4th Floor, Phase 8b,</p>
                  <p className="text-sm m-0">
                    Sector 74, Mohali (Punjab) India.
                  </p>
                </a>
                <a className="text-dark" href="tel:+91 6284758664"></a>
                <a
                  className="sec-clr underline"
                  href="mailto:sunil@aronwebsolutions.com"
                ></a>
                <a
                  className="sec-clr underline"
                  href="mailto:sales@aronwebsolutions.com"
                ></a>
                <button className="floating_button absolute lg:hidden cros_btn">
                  ×
                </button>
              </div>
            </div>
          </div>

          <div className="map_pin4 absolute">
            <div className="relative ctm_pin">
              <img
                src="public/front/images/map-pin.png"
                alt="map pin"
              />
              <a href="#" target="_blank" className="text-dark"></a>
              <div className="hidden lg:block show_on_hover_office absolute bg-white p-3 rounded hide_img">
                <a href="#" target="_blank" className="text-dark">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="map_flag australia_flag"
                      src="public/front/images/australia_flag.webp"
                      alt="Australia FLAG"
                    />
                    <h5 className="m-0 uppercase text-lg">Australia</h5>
                  </div>
                  <p className="text-sm m-0">25 Farnham Road,</p>
                  <p className="text-sm m-0">Keswick South Australia.</p>
                </a>
                <a
                  className="sec-clr underline"
                  href="mailto:sales@aronwebsolutions.com"
                ></a>
                <button className="floating_button absolute lg:hidden cros_btn">
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
