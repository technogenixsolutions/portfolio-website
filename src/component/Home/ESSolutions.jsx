import { useState } from "react";

// Importing brand logos
import brandLogo1 from "../../assets/image/HomePage/tabsImages/brand-logo1.webp";
import brandLogo2 from "../../assets/image/HomePage/tabsImages/brand-logo2.webp";
import brandLogo3 from "../../assets/image/HomePage/tabsImages/brand-logo3.webp";
import brandLogo4 from "../../assets/image/HomePage/tabsImages/brand-logo4.webp";
import brandLogo5 from "../../assets/image/HomePage/tabsImages/brand-logo5.webp";
import brandLogo6 from "../../assets/image/HomePage/tabsImages/brand-logo6.webp";
import brandLogo7 from "../../assets/image/HomePage/tabsImages/brand-logo7.webp";
import brandLogo8 from "../../assets/image/HomePage/tabsImages/brand-logo8.webp";

const ESSolutions = () => {
  const [activeTab, setActiveTab] = useState("tab1");   

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Define JSON data for tabs
  const tabsData = [
    {
      id: "tab1",
      name: "Shopify",
      title:
        "Build, Grow, and Manage your online store with Shopify",
        description: "Start selling online hassle-free with our Shopify Partners service! We help you set up and personalize your online store, from choosing cool designs to making sure your business will look awesome and be easy for customers to use.",
      link: "#",
      image: brandLogo1
    },
    {
      id: "tab2",
      name: "WooCommerce",
      title:
      "Build and customize your dream online store With Woocommerce",
      description: "Our WooCommerce Experts service is here for you! We guide you through listing your products, setting up how people pay, and making your store work smoothly. We make sure your online shop is simple and attracts lots of buyers.",
      link: "#",
      image: brandLogo2
    },
    {
      id: "tab3",
      name: "Magento",
      title:
      "Level up your online Store with customizable Magento Platform",
      description: "Make your online business stronger with our Magento Partners service! We're the experts in creating really good online stores. We help with making your store look nice and work well, so your customers have a great time shopping.",
      link: "#",
      image: brandLogo3
    },
    {
      id: "tab4",
      name: "WordPress",
      title:
      "WordPress fuels your ecommerce, websites, and more",
      description: "Our WPengine Partners service is perfect! We focus on speeding up and securing your WordPress site hosted on WPengine. You can concentrate on your content while we handle the techie parts to keep your site running well.",
      link: "https://www.aronwebsolutions.com/hire-woo-expert",
      image: brandLogo4
    },
    
    {
      id: "tab5",
      name: "Webflow",
      title:
      "Your ideas, our tools. Build custom e-commerce websites",
      description: "Turn your cool web design ideas into reality with our Webflow Experts service! We're here to create websites that not only look amazing but also work well. Our team will make your website stands out and user-friendly for visitors.",
      link: "https://www.aronwebsolutions.com/hire-woo-expert",
      image: brandLogo5
    },
    
    {
      id: "tab6",
      name: "BigCommerce",
      title:
      "Build and grow your e-commerce empire with bigcommerce",
      description: "Get the most from your online store with our BigCommerce Partner service! We're experts in setting up and customizing BigCommerce websites. We make sure your store looks great and is easy for people to shop.",
      link: "https://www.aronwebsolutions.com/hire-woo-expert",
      image: brandLogo6
    },
    
    {
      id: "tab7",
      name: "Wix",
      title:
      "Turning Dreams into Stunning E-Commerce Reality.",
      description: "Build your online presence easily with our Wix Partners service! We help you design, customize, and launch your Wix website. Your site will not only look awesome but also work well, making it easy for you to show off your stuff or ideas.",
      link: "https://www.aronwebsolutions.com/hire-woo-expert",
      image: brandLogo7
    },
    {
      id: "tab8",
      name: "Squarespace",
      title:
      "Let's Design a stunning online store that reflects your brand",
      description: "Create a fantastic website with our Squarespace Experts service! We're experts in designing and customizing Squarespace websites. We help you pick a good look and ensure your website reflects your style and impresses your visitors.",
      link: "https://www.aronwebsolutions.com/hire-woo-expert",
      image: brandLogo8
    },
    
  ];

  return (
    <div className="bg-[#000] py-[30px]">
      <div className="container">
        <div className="hm_ecom_tabs text-center mb-4 md:mb-5 text-white">
          <p className="fs-18 mb-1 text-white">
            Innovative Ecommerce Service Solutions
          </p>
          <h2 className="fs-36 Lh-54">
            Get Your Online Store Ready with our Ecommerce Services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0 lg:gap-10">
          <div className="">
            <div className="ecom_logos_left bg-white rounded flex justify-center items-center px-4 py-5">
              <ul className="grid lg:grid-col-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4" id="myTab" role="tabList">
                {tabsData.map(tab => (
                  <li className="tabs_left" key={tab.id}>
                    <button
                      className={activeTab === tab.id ? "active border-0 m-0 p-0" : "border-0 m-0 p-0"}
                      onClick={() => handleTabClick(tab.id)}
                      id={`${tab.id}-tab}`}
                    >
                      <img src={tab.image} alt={tab.name} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            {/* <!-- tab content --> */}
            {tabsData.map(tab => (
              <div className={activeTab === tab.id ? "tab-pane fade show active" : "tab-pane fade"} id={tab.id} key={tab.id}>
                <div className="ecom_content_right">
                  <h3 className="fs-24 text-white mb-0 md:mb-3">{tab.name}</h3>
                  <h4 className="fs-48 Lh-52 text-white fw-400 mb-2 md:mb-4">{tab.title}</h4>
                  <p className="text-white fs-20 fw-300 mb-3 md:mb-5">{tab.description}</p>
                  <a className="btn btn-primary btn-px-md text-white" href={tab.link}>
                    <span>Hire Me</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESSolutions;
