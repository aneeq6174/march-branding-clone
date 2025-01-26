import React, { useState, useEffect } from "react";
import EnquirySection from './EnquirySection';

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            title: "Strategy",
            description: "We uncover what makes your brand special and create a plan to achieve your goals.",
            list: [
                "Discovery Workshop",
                "Customer Persona",
                "UX Workshop",
                "Brand Positioning",
                "Content Strategy"
            ],
            images: [
                "https://marchbranding.com/wp-content/uploads/2024/08/services-strategy-02-dishmatic.jpg",
                "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
                "https://marchbranding.com/wp-content/uploads/2024/03/kam-idris-_HqHX3LBN18-unsplash-scaled-e1733149270721.jpg",
                "https://marchbranding.com/wp-content/uploads/2023/03/clean-customer-data.jpg"
            ]
        },
        {
            title: "Design",
            description: "Creating stunning visuals that communicate your brand message effectively.",
            list: [
                "Graphic Design",
                "Web Design",
                "UI/UX Design",
                "Brand Identity",
                "Packaging Design"
            ],
            images: [
                "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1732020743205-9a1da14e36fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
        {
            title: "Development",
            description: "Building robust and scalable solutions to meet your business needs.",
            list: [
                "Web Development",
                "App Development",
                "E-commerce Solutions",
                "CMS Development",
                "API Integration"
            ],
            images: [
                "https://marchbranding.com/wp-content/uploads/2024/08/services-strategy-02-dishmatic.jpg",
                "https://marchbranding.com/wp-content/uploads/2025/01/interior-design-trends-2025.jpg",
                "https://marchbranding.com/wp-content/uploads/2024/03/kam-idris-_HqHX3LBN18-unsplash-scaled-e1733149270721.jpg",
                "https://marchbranding.com/wp-content/uploads/2023/03/clean-customer-data.jpg"
            ]
        },
        {
            title: "Marketing",
            description: "Crafting strategies to enhance your brand's presence and drive engagement.",
            list: [
                "Digital Marketing",
                "SEO Optimization",
                "Social Media Marketing",
                "Content Marketing",
                "Email Campaigns"
            ],
            images: [
                "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1732020743205-9a1da14e36fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 2500);

        return () => clearInterval(timer);
    }, [services.length]);

    return (
        <section className="bg-customGray h-auto font-outfit text-white">
            <div className="ServicesSection px-6 lg:px-20">

                <div className="heroHeadings flex flex-col justify-center h-auto pt-32 pb-24 md:py-48 md:pt-48 md:h-auto ">
                    <div className="little-heading">
                        <p className="text-xs font-semibold">DESIGN SERVICES</p>
                    </div>
                    <div className="heading py-5">
                        <h1 className="text-7xl lg:text-9xl font-medium md:font-semibold">Where Creativity Meets Strategy</h1>
                    </div>
                </div>

                {services.map((service, index) => (
                    <div key={index} className="Services1 flex flex-wrap lg:flex-nowrap justify-between gap-6 lg:gap-48 pb-20 lg:pb-40 h-auto w-full">
                        <div className="text w-full lg:w-1/2">
                            <h3 className="text-4xl lg:text-7xl font-medium pb-5">{service.title}</h3>
                            <p className="text-2xl lg:text-3xl leading-normal pb-7">
                                {service.description}
                            </p>
                            <ol className="text-base lg:text-xl">
                                {service.list.map((item, idx) => (
                                    <li key={idx} className="before:content-['-'] before:mr-2">{item}</li>
                                ))}
                            </ol>
                            <div className="ServiceButton my-16 md:my-0 md:pt-10">
                                <button className="px-8 py-3 text-base lg:text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                    <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                    <span className="relative z-10 group-hover:text-black">{service.title} Services</span>
                                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                                </button>
                            </div>
                        </div>
                        <div className="image w-full lg:w-1/2 bg-green-700 relative">
                            <div className="w-full h-64 lg:h-full overflow-hidden relative">
                                {service.images.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={img}
                                        alt={`Slide ${imgIndex + 1}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                            imgIndex === currentIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {service.images.map((_, imgIndex) => (
                                    <button
                                        key={imgIndex}
                                        onClick={() => setCurrentIndex(imgIndex)}
                                        className={`w-3 h-3 rounded-full ${
                                            currentIndex === imgIndex ? "bg-white" : "bg-gray-500"
                                        }`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <EnquirySection />
        </section>
    );
};

export default Services;
