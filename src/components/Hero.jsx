import React from "react";

const Hero = () => {
    return (
        <section className="hero bg-customGray flex items-center justify-center text-center px-3 md:px-8 h-auto pt-20 md:h-screen m-0 md:mt-7">
            <div className="w-full">
                {/* Big Text */}
                <h1 className="text-6xl text-white pt-10  md:text-9xl font-semibold md:font-bold tracking-wide leading-tight ">
                    Brand Authority By Design
                </h1>
                {/* Subtext */}
                <p className="px-3 text-2xl md:text-4xl font-semibold md:font-bold text-white py-7 md:py-10 leading-normal md:leading-relaxed">
                    March designs authentic brands and high-performance websites for businesses ready to thrive online.
                </p>
            </div>
        </section>
              
    );
};

export default Hero;
