import React from "react";
import EnquirySection from './EnquirySection';

const insightsData = [
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/09/Anna-Spiro-Brand-Identity-high.gif",
    title: "Anna Spiro",
    description: "Branding and e-commerce platform for one of the world's most inventive interior designers",
    type: "Interior Design"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/09/index-sarah-vanrenen.jpg",
    title: "Sarah Vanrenen",
    description: "Brand transformation for a distinguished British interior designer",
    type: "Interior Design"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/07/index-bdc-3.jpg",
    title: "Business Design Center",
    description: "Strategy, user experience and website redesign for an iconic venue in the heart of London",
    type: "Event Venue"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/09/index-bloomsbury-construction-2.jpg",
    title: "Bloomsbury Construction Group",
    description: "Establishing a powerful brand identity and website for a super-prime construction firm",
    type: "Construction"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/03/index-beata-heuman-1.jpg",
    title: "Self Space",
    description: "Bringing a challenger brand to life in the mental health space",
    type: "Mental Health"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2023/12/index-studio-hollond-1.jpg",
    title: "Beata Heuman",
    description: "Crafting an industry leading e-commerce solution for one of the UK's most celebrated interior designers",
    type: "Interior Design"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/09/index-bloomsbury-construction-2.jpg",
    title: "6 Key Interior Design Trends for 2025 Unveiled",
    description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year.",
    type: "Interior Design"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2024/11/index-hotelhub.jpg",
    title: "HotelHub",
    description: "Redesigning the website for the world's leading hotel booking software tailored for TMCs",
    type: "Software"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2022/06/Dishmatic-Bubbles-Animation-high.gif",
    title: "Dishmatic",
    description: "Website and packaging design for a leading international FMCG brand",
    type: "FMCG"
  },
  {
    imgSrc: "https://marchbranding.com/wp-content/uploads/2020/03/index-flora-soames.jpg",
    title: "Flora Soames",
    description: "E-commerce website design and development for a prominent British interior designer",
    type: "Interior Design"
  },
];
const CaseStudies = () => {
  return (
    <section className="bg-customGray pt-40 h-auto font-outfit text-white">
      <div className="CaseStudies px-6 md:px-20">
        <div className="little heading">
          <p className="text-xs font-semibold">CASE STUDIES</p>
        </div>
        <div className="heading py-4">
          <h1 className="text-6xl lg:text-7xl leading-tight font-semibold">Success Stories</h1>
        </div>

        <div className="options py-6 md:py-10 mt-6 md:mt-10">
          <ul className="flex flex-wrap justify-start md:justify-start text-lg md:text-xl space-x-4 md:space-x-6">
            <li>All</li>
            <li>Brand</li>
            <li>Digital</li>
            <li>Strategy</li>
          </ul>
        </div>

        <div className="cards">
          <div className="cards-container flex flex-wrap justify-center md:justify-between -mx-2">
            {insightsData.map((insight, index) => (
              <div
                key={index}
                className="card rounded-lg w-full sm:w-[48%] lg:w-[32%] h-auto mb-8 px-2 transition-transform duration-500 hover:scale-105 group flex flex-col justify-between"
              >
                <div className="image overflow-hidden rounded-md">
                  <img
                    src={insight.imgSrc}
                    alt={insight.title}
                    className="w-full h-64 md:h-80 object-cover rounded-md transition-transform duration-500 transform group-hover:scale-110"
                  />
                </div>
                <div className="content flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white py-3 transition-colors duration-500 group-hover:text-yellow-200">
                      {insight.title}
                    </h3>
                    <p className="text-white text-base md:text-lg font-medium mb-2">
                      {insight.description}
                    </p>
                  </div>
                  <div className="company-type mt-4">
                    <span className="inline-block border border-white text-white py-1 px-3 rounded-full text-sm font-medium">
                      {insight.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EnquirySection />
    </section>
  );
};

export default CaseStudies;
