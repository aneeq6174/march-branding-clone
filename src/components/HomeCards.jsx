// import React from "react";

// const HomeCards = () => {
//   const cardsData = [
//     {
//       id: 1,
//       image: "https://marchbranding.com/wp-content/uploads/2024/11/homepage-banner-hotelhub.jpg",
//       text: "Digital transformation . HotelHub . Digital transformation . HotelHub .",
//     },
//     {
//       id: 2,
//       image: "https://marchbranding.com/wp-content/uploads/2024/08/homepage-banner-self-space.jpg",
//       text: "Innovation at its peak . Explore More . Innovation at its peak .",
//     },
//     {
//       id: 3,
//       image: "https://marchbranding.com/wp-content/uploads/2024/08/homepage-banner-beata-heuman.jpg",
//       text: "Discover new horizons . Travel . Discover new horizons . Travel .",
//     },
//     {
//       id: 4,
//       image: "https://marchbranding.com/wp-content/uploads/2024/08/homepage-banner-self-space.jpg",
//       text: "Experience the future . Learn More . Experience the future .",
//     },
//   ];

//   return (
//     <section className="stacked-scroll-container h-auto flex flex-col">
//       {cardsData.map((card) => (
//         <div
//           key={card.id}
//           className="stacked-card sticky top-10 pt-10 md:pt-0 md:top-0 h-[50vh] sm:h-[70vh] md:h-screen px-5 md:px-20"
//         >
//           <div className="sticky w-full h-full overflow-hidden rounded-3xl">
//             <img
//               src={card.image}
//               alt={`Card ${card.id}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative flex space-x-4">
//                 <div className="flex animate-scrollText">
//                   <p className="text-white text-2xl md:text-4xl font-bold whitespace-nowrap">
//                     {card.text}
//                   </p>
//                   <p className="text-white text-2xl md:text-4xl font-bold whitespace-nowrap">
//                     {card.text}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default HomeCards;







import React from "react";

const HomeCards = () => {
  const cardsData = [
    {
      id: 1,
      image: "https://marchbranding.com/wp-content/uploads/2024/11/homepage-banner-hotelhub.jpg",
      text: "Digital transformation . HotelHub . Digital transformation . HotelHub .",
    },
    {
      id: 2,
      image: "https://marchbranding.com/wp-content/uploads/2024/08/homepage-banner-self-space.jpg",
      text: "Innovation at its peak . Explore More . Innovation at its peak .",
    },
    {
      id: 3,
      image: "https://marchbranding.com/wp-content/uploads/2024/08/homepage-banner-beata-heuman.jpg",
      text: "Discover new horizons . Travel . Discover new horizons . Travel .",
    },
    {
      id: 4,
      image: "https://marchbranding.com/wp-content/uploads/2024/08/homepage-banner-self-space.jpg",
      text: "Experience the future . Learn More . Experience the future .",
    },
  ];

  return (
    <section className="h-screen overflow-y-scroll relative">
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          className={`sticky top-0 h-screen flex items-center justify-center z-${cardsData.length - index}`}
        >
          <div className="w-full h-full overflow-hidden rounded-3xl relative">
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex space-x-4">
                <div className="flex animate-scrollText">
                  <p className="text-white text-2xl md:text-4xl font-bold whitespace-nowrap">
                    {card.text}
                  </p>
                  <p className="text-white text-2xl md:text-4xl font-bold whitespace-nowrap">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeCards;