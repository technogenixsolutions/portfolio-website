import { useState } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? null : index);
  };

  const accordionData = [
    { title: "Designing", answer: "We take pride in creating attractive and functional websites that meet the unique needs of our clients. Our team of designers and developers work together to create websites that are visually stunning, user-friendly, and optimized for search engines." },
    { title: "Second Item", answer: "Second Item Content" },
    { title: "Third Item", answer: "Third Item Content" },
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          answer={item.answer}
          isOpen={index === openAccordionIndex}
          toggleAccordion={() => toggleAccordion(index)}
          initiallyOpen={index === 0} 
        />
      ))}
    </div>
  );
};

export default FAQ;
