import React from "react";
import EnquirySection from './EnquirySection';

const insightsData = [
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
        title: "6 Key Interior Design Trends for 2025 Unveiled",
        description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
    },
    {
        imgSrc: "https://www.holycode.com/wp-content/uploads/2023/05/job-candidate-interview.jpg",
        title: "March’s 2024 Highlights",
        description: "As 2024 draws to a close, we've taken a look back at some of our favourite projects, events and team milestones from the past year."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2024/12/E-Commerce-for-Interior-Designers-Hero.webp",
        title: "How to Launch a Product Range: 5 E-commerce Tips for Interior Designers",
        description: "The business of interior design continues to grow. To capitalise on this success, many studios are now launching their own product ranges to complement their services."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2024/03/kam-idris-_HqHX3LBN18-unsplash-scaled-e1733149270721-1536x942.jpg",
        title: "10 Best Interior Designer Websites for Inspiration",
        description: "If you’re an interior design business, how your website looks and feels is paramount. We review ten of the best interior design websites around – how they look and why they work."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2023/03/clean-customer-data-2048x1015.webp",
        title: "5 Important Reasons to Clean Customer Data",
        description: "Poor quality data can lead to inaccurate decision-making, increased costs, and lost revenue. In this article, we will explore five important reasons why it is essential to clean your customer data."
    },
    {
        imgSrc: "https://colorlib.com/wp/wp-content/uploads/sites/2/15_awesome-websites.jpg",
        title: "Building great websites is Elementor ...y ",
        description: "We’re an Elementor agency, which means we can deliver better websites for our customers, faster and more affordably than ever before."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
        title: "6 Key Interior Design Trends for 2025 Unveiled",
        description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
    },
    {
        imgSrc: "https://www.holycode.com/wp-content/uploads/2023/05/job-candidate-interview.jpg",
        title: "March’s 2024 Highlights",
        description: "As 2024 draws to a close, we've taken a look back at some of our favourite projects, events and team milestones from the past year."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2024/12/E-Commerce-for-Interior-Designers-Hero.webp",
        title: "How to Launch a Product Range: 5 E-commerce Tips for Interior Designers",
        description: "The business of interior design continues to grow. To capitalise on this success, many studios are now launching their own product ranges to complement their services."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
        title: "6 Key Interior Design Trends for 2025 Unveiled",
        description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
    },
    {
        imgSrc: "https://www.holycode.com/wp-content/uploads/2023/05/job-candidate-interview.jpg",
        title: "March’s 2024 Highlights",
        description: "As 2024 draws to a close, we've taken a look back at some of our favourite projects, events and team milestones from the past year."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2024/12/E-Commerce-for-Interior-Designers-Hero.webp",
        title: "How to Launch a Product Range: 5 E-commerce Tips for Interior Designers",
        description: "The business of interior design continues to grow. To capitalise on this success, many studios are now launching their own product ranges to complement their services."
    },
];

const Insights = () => {
    return (
        <section className="bg-customGray px-5 pt-32 md:pt-40 h-auto font-outfit text-white">
            <div className="CaseStudies md:px-20">

                {/*Heading and text above and below with it*/}
                <div className="little heading">
                    <p className="text-xs font-semibold">ARTICLES</p>
                </div>
                <div className="heading py-4">
                    <h1 className="text-6xl md:text-9xl font-semibold leading-snug md:leading-none">Design Insights</h1>
                </div>
                <div className="Text">
                    <p className="text-xl md:text-3xl pt-6 md:pt-10 w-full md:w-2/5">
                        Insights and articles so rich they should come with their own off-shore bank account.
                    </p>
                </div>

                {/*Options under the heading*/}
                <div className="options py-10 mt-6 md:mt-10">
                    <ul className="flex flex-row text-xl space-x-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                        <li className="underline">All Insights</li>
                        <li>Brand</li>
                        <li>Digital</li>
                        <li>Interiors</li>
                        <li>Other</li>
                        <li>Strategy</li>
                    </ul>
                </div>

                {/* Cards */}
                <div className="cards-container flex w-full flex-wrap justify-between pb-32">
                    {insightsData.map((insight, index) => (
                        <div
                            key={index}
                            className="card px-2 md:mt-5 md:mb-10 rounded-lg w-full md:w-1/3 h-[75vh] transition-transform duration-500 hover:scale-100 hover:text-yellow-200 group"
                        >
                            <div className="image w-full overflow-hidden rounded-md">
                                <img
                                    src={insight.imgSrc}
                                    alt={insight.title}
                                    className="w-full h-48 md:h-64 object-cover rounded-md transition-transform duration-500 transform group-hover:scale-110"
                                />
                            </div>
                            <div className="heading mt-4">
                                <h3 className="text-2xl py-3 md:text-4xl font-semibold text-white transition-colors duration-500 group-hover:text-yellow-200">
                                    {insight.title}
                                </h3>
                            </div>
                            <div className="text mt-2">
                                <p className="text-white md:text-lg font-medium">
                                    {insight.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <EnquirySection />
        </section>
    );
};

export default Insights;
