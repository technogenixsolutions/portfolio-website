

const AboutUs = () => {
  return (
    <div className='mt-10'>
      <div className="about_outer section_ptb pt-0">
        <div className="container mx-auto">
          <div className="aws-circle-logo text-center section_ptb pt-0 hidden">
            <a href="https://www.aronwebsolutions.com/hire-shopify-expert" className="ctm_rotate_img">
              <img src="public/front/images/aws-circle-logo.png" className="img-fluid aws_circle_logo ctm_rotatation mx-auto" alt="Award winning Shopify logo"  />
              <img src="public/front/images/aws_sm_logo.png" className="img-fluid ctm_fix mx-auto" alt="Award winning Shopify logo"  />
            </a>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="about_inner flex flex-col justify-between ">
                <h3 className="text-4xl md:text-6xl">About Us</h3>
                <p className="text-lg md:text-xl font-light">
                  Aron Web Solutions stands out as the leading company in the online world. Our dedication to excellence has earned us top ratings including 5-star ratings across renowned platforms. In the eyes of Top Developers, Good Firms, Shopify, and Clutch, we've earned the highest marks. These ratings are a testament to our 100% commitment to delivering top-notch solutions. We prioritize client satisfaction, ensuring that every project we undertake is executed with precision and innovation. Our dedication to excellence has solidified our position as a trusted industry leader, and we continue to grow businesses with our unmatched technology and expert guidance.
                </p>
                <a className="btn btn-primary text-white px-4 py-2 mt-4" href="#">Read More</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end items-end">
              <div className="top-developers-logos">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/top-developers-logo11.png" alt="Top Developers"  />
                    </a>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/top-developers-logo14.png" alt="Trustpilot"  />
                    </a>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/trustpilot.png" alt="Upcity"  />
                    </a>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/top-developers-logo15.png" alt="Software Outsourcing"  />
                    </a>
                  </div>
                  <div>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/upcity.webp" alt="Good firms"  />
                    </a>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/dsng_rush.png" alt="Clutch"  />
                    </a>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/techreviewer.png" alt="Techreviewer"  />
                    </a>
                    <a href="#" target="_blank" >
                      <img className="w-full border rounded-3 mb-2 object-contain" src="https://www.aronwebsolutions.com/public/front/images/sftwre_outsrcng.png" alt="DesignRush" title="vet designs for a website"  />
                    </a>
                  </div>
                </div>
                <div className="dv_inpt_ctmh mt-3">
                  <div className="input-group">
                    <form className="form-wrap sub-forms flex items-center " >
                      <input type="email" name="email" id="sub_email" className="form-control" placeholder="Enter Email" />
                      <button type="submit" className="btn btn-primary px-4 sub_msg_btn">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default AboutUs;
