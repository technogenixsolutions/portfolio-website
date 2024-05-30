
import elementor from '../../assets/image/HomePage/faq_brand_img/elementor_logo.webp';
import shopify_logo from '../../assets/image/HomePage/faq_brand_img/shopify_logo.webp';
import squarespace_logo from '../../assets/image/HomePage/faq_brand_img/squarespace_logo.webp';
import wix_logo from '../../assets/image/HomePage/faq_brand_img/wix_logo.webp';
import des_webflow_logo from '../../assets/image/HomePage/faq_brand_img/des_webflow_logo.webp';

const Accordion = ({ title, answer, isOpen, toggleAccordion, imgSrc }) => {
  return (
    <div className="p-2 home_faq_shadow mb-4">
       <div className='py-2'>
           <div className=''>
     <button
        onClick={toggleAccordion}
        className="flex justify-between w-full "
      >
        <span className="fw-400 capitalize hover:underline">{title}</span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen ? "!rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen ? "!rotate-180" : ""
            }`}
          />
        </svg>
      </button>
     </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="py-4 leading-8 hover:underline">{answer}</p>
          <div className='flex items-center gap-3'>
             <div className='text-center'>
                <img src={elementor} />
                <span className='fs-12'>Elementor</span>
             </div>
             <div className='text-center'>  
                <img src={shopify_logo} />
                <span className='fs-12'>Shopify</span>
             </div>
             
             <div className='text-center'>
                <img src={squarespace_logo} />
                <span className='fs-12'>Squarespace</span>
             </div>
             <div className='text-center'>
                <img src={wix_logo} />
                <span className='fs-12'>Wix</span>
             </div>
             <div className='text-center'>
                <img src={des_webflow_logo} />
                <span className='fs-12'>Des Webflow</span>
             </div>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default Accordion;
