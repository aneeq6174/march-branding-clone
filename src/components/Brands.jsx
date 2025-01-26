import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
const Brands = () => {
    const logos = [
          { id: 1, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-bdc.png", alt: "Logo 1" },
          { id: 2, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-i.png", alt: "Logo 2" },
          { id: 3, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-self-space.png", alt: "Logo 3" },
          { id: 4, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-beata-heuman.png", alt: "Logo 4" },
          { id: 5, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-dishmatic.png", alt: "Logo 5" },
          { id: 6, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-anna-spiro.png", alt: "Logo 6" },
          { id: 7, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-healthy-back-bag.png", alt: "Logo 7" },
          { id: 8, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-sarah-vanrenen.png", alt: "Logo 8" },
          { id: 9, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-festival-media.png", alt: "Logo 9" },
          { id: 10, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-cada-design.png", alt: "Logo 10" },
          { id: 11, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-fs.png", alt: "Logo 11" },
          { id: 12, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-bloomsbury-construction.png", alt: "Logo 12" },
          { id: 13, src: "https://marchbranding.com/wp-content/uploads/2024/11/logo-bernard-london.png", alt: "Logo 13" },
          { id: 14, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-ip.png", alt: "Logo 14" },
          { id: 15, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-hotelhub.png", alt: "Logo 15" },
          { id: 16, src: "https://marchbranding.com/wp-content/uploads/2024/08/logo-desertfest.png", alt: "Logo 16" },
];

    const reviews = [
         {
             id: 1,
             statement: "This is a fantastic service that has changed our business.This is a fantastic service that has changed our business.This is a fantastic service that has changed our business.This is a fantastic service that has changed our business.",
             name: "John Doe",
             designation: "CEO, Company A"
         },
         {
             id: 2,
             statement: "“March helped us build a great platform from which we can showcase our work. With their help we achieved the original and contemporary look we were after – and our clients seem to love it!”",
             name: "Jane Smith",
             designation: "Marketing Director, Company B"
         },
         {
             id: 3,
             statement: "“We have worked with March for several years and are very impressed by their work in branding and web design. They are quick to respond to queries and always come up with helpful suggestions.”",
             name: "Mark Johnson",
             designation: "CTO, Company C"
         },
         {
             id: 4,
             statement: "“March created an engaging, effortlessly navigable, and aesthetically exquisite website for our business. Their speed and professionalism was first class and I would thoroughly recommend their services.”",
             name: "Emily Davis",
         },
];

    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div className="text-white">
            {/* Section 1: Centered H1 */}
            <section className="h-[50vh] md:h-screen flex items-center flex-col justify-center">
                <h1 className="text-5xl md:text-[8vw] font-semibold md:font-bold text-white leading-tight">Amplify</h1>
                <h1 className="text-5xl md:text-[8vw] font-semibold md:font-bold text-white leading-tight">Your Brand</h1>
            </section>

            {/* Section 2: Content Below */}
            <section className="min-h-screen flex flex-col items-center justify-start space-y-5 md:space-y-8 pt-16 px-4">
                <h4 className="text-3xl md:text-5xl leading-tight w-full md:w-3/6 text-center font-semibold max-w-4xl">
                    To create meaningful connections between brands and people - that’s our mission.
                </h4>
                <p className="text-2xl md:text-2xl font-normal md:font-semibold leading-snug md:leading-normal text-center max-w-3xl py-5">
                    We do this by bringing stories to life with authenticity and purpose, crafting brands and digital experiences that resonate with audiences and deliver genuine impact. We’re built on trust, fuelled by creativity, and focused on achieving results that matter.
                </p>
                <Link to="/case-studies" className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4 mt-8">
                    <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    <span className="relative z-10 group-hover:text-black">Success Stories</span>
                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                </Link>

                {/* Brands Logos Section */}
                <h4 className="text-xl md:text-3xl font-semibold pt-16 md:pt-40 pb-5 md:pb-16">Brands that trust March</h4>
                <div className="flex flex-wrap justify-center gap-8 mt-4 md:mt-8">
                    {logos.map((logo) => (
                        <div key={logo.id} className="md:w-36 md:h-28 w-20 h-auto flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-75">
                            <img src={logo.src} alt={logo.alt} className="md:w-28 md:h-28 object-contain" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews Section */}
            <section className="min-h-screen flex flex-col items-center justify-center space-y-6 pt-16 px-4">
                {reviews.length > 0 ? (
                    <div className="max-w-4xl md:text-center">
                        <p className="text-2xl md:text-5xl font-medium md:font-semibold mb-4">{reviews[currentReview].statement}</p>
                        <p className="text-xl md:text-2xl mt-10 font-medium">{reviews[currentReview].name}</p>
                        <p className=" md:text-lg text-gray-400">{reviews[currentReview].designation}</p>
                    </div>
                ) : (
                    <p className="text-2xl font-medium">No reviews available.</p>
                )}
                <div className="flex space-x-2 py-10 md:py-0">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-4 h-4 rounded-full ${
                                index === currentReview ? 'bg-white' : 'bg-gray-400'
                            }`}
                        ></button>
                    ))}
                </div>
                <div className="moreReviewsButton pt-10">
                    <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                        <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        <span className="relative z-10 group-hover:text-black">View All Reviews</span>
                        <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Brands;
