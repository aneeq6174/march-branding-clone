import React from "react";
import Hero from "./Hero"; 
import HomeCards from "./HomeCards"; 
import Brands from "./Brands"; 
import HomeInsights from "./HomeInsights"; 
import EnquirySection from "./EnquirySection";

const Home = () => {
  return (
    <div className="bg-customGray max-w-screen font-outfit">
      <Hero />
      <HomeCards />
      <Brands />
      <HomeInsights />
      <EnquirySection/>
      {/* Add other homepage components here */}
    </div>
  );
};

export default Home;
