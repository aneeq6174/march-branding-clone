// import React from "react";

// const insightsData = [
//     {
//         imgSrc: "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
//         title: "6 Key Interior Design Trends for 2025 Unveiled",
//         description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
//     },
//     {
//         imgSrc: "https://marchbranding.com/wp-content/uploads/2024/03/kam-idris-_HqHX3LBN18-unsplash-scaled-e1733149270721.jpg",
//         title: "6 Key Interior Design Trends for 2025 Unveiled",
//         description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
//     },
//     {
//         imgSrc: "https://marchbranding.com/wp-content/uploads/2023/03/clean-customer-data.jpg",
//         title: "6 Key Interior Design Trends for 2025 Unveiled",
//         description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
//     },
// ];

// const HomeInsights = () => {
//     return (
//         <section className="px-14 py-9">
//             {/* Heading and Button */}
//             <div className="HeadingAndButton flex justify-between text-white px-6 py-9">
//                 <div className="heading text-5xl font-bold">Latest Design Insights</div>
//                 <button className="button text-xl flex items-center">
//                     View all Design Insights
//                     <i className="fa-solid fa-arrow-right pt-1 pl-1 text-lg"></i>
//                 </button>
//             </div>

//             {/* Cards */}
//             <div className="cards-container flex justify-between space-x-8">
//                 {insightsData.map((insight, index) => (
//                     <div
//                         key={index}
//                         className="card p-6 rounded-lg w-1/3 transition-transform duration-500 hover:scale-100 hover:text-yellow-200 group"
//                     >
//                         <div className="image overflow-hidden rounded-md">
//                             <img
//                                 src={insight.imgSrc}
//                                 alt={insight.title}
//                                 className="w-full h-64 object-cover rounded-md transition-transform duration-500 transform group-hover:scale-110"
//                             />
//                         </div>
//                         <div className="heading mt-4">
//                             <h3 className="text-4xl font-semibold text-white transition-colors duration-500 group-hover:text-yellow-200">
//                                 {insight.title}
//                             </h3>
//                         </div>
//                         <div className="text mt-2">
//                             <p className="text-white text-lg font-medium">
//                                 {insight.description}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default HomeInsights;

























import React from "react";

const insightsData = [
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
        title: "6 Key Interior Design Trends for 2025 Unveiled",
        description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2024/03/kam-idris-_HqHX3LBN18-unsplash-scaled-e1733149270721.jpg",
        title: "6 Key Interior Design Trends for 2025 Unveiled",
        description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
    },
    {
        imgSrc: "https://marchbranding.com/wp-content/uploads/2023/03/clean-customer-data.jpg",
        title: "6 Key Interior Design Trends for 2025 Unveiled",
        description: "As 2024 draws to a close, we've taken a look back at some of our favorite projects, events, and team milestones from the past year."
    },
];

const HomeInsights = () => {
    return (
        <section className="px-4 sm:px-8 md:px-14 py-9">
            {/* Heading and Button */}
            <div className="HeadingAndButton flex flex-col md:flex-row justify-between items-start md:items-center text-white px-6 py-9 space-y-4 md:space-y-0">
                <div className="heading text-3xl sm:text-4xl md:text-5xl font-bold">
                    Latest Design Insights
                </div>
                <button className="button text-lg sm:text-xl flex items-center">
                    View all Design Insights
                    <i className="fa-solid fa-arrow-right pt-1 pl-1 text-lg"></i>
                </button>
            </div>

            {/* Cards */}
            <div className="cards-container flex flex-wrap justify-between space-y-8 md:space-y-0 md:flex-nowrap md:space-x-8">
                {insightsData.map((insight, index) => (
                    <div
                        key={index}
                        className={`card p-6 rounded-lg w-full sm:w-1/2 md:w-1/3 transition-transform duration-500 hover:scale-100 hover:text-yellow-200 group ${
                            index > 0 ? 'hidden sm:block' : ''
                        }`}
                    >
                        <div className="image overflow-hidden rounded-md">
                            <img
                                src={insight.imgSrc}
                                alt={insight.title}
                                className="w-full h-64 object-cover rounded-md transition-transform duration-500 transform group-hover:scale-110"
                            />
                        </div>
                        <div className="heading mt-4">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white transition-colors duration-500 group-hover:text-yellow-200">
                                {insight.title}
                            </h3>
                        </div>
                        <div className="text mt-2">
                            <p className="text-white text-base sm:text-lg font-medium">
                                {insight.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeInsights;
