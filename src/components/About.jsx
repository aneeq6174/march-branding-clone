import React, { useEffect, useState } from "react";
import EnquirySection from './EnquirySection';

const About = () => {
    const [currentReview, setCurrentReview] = useState(0); // Initialize state for currentReview

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Adjust the speed of counting

        const runCounter = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };

                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            updateCount();
                            observer.disconnect(); // Stop observing after animation
                        }
                    },
                    { threshold: 0.5 } // Trigger when 50% of the element is visible
                );

                observer.observe(counter);
            });
        };

        runCounter();
    }, []);

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
            statement: "This is a fantastic service that has changed our business.",
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

    return (
        <section>
            <div className="AboutSection font-outfit text-white px-4 md:px-20 bg-customGray">

                {/*Introdctory Video*/}
                <div className="introVideo pt-28 md:pt-0">
                    <video className="w-full h-auto" autoPlay loop muted>
                        <source src="https://marchbranding.com/wp-content/uploads/2024/11/March-Logo-Intro-1920x1080-1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/*Headings beneth*/}
                <div className="Text w-full md:w-1/2 mt-16 md:mt-28">
                    <div className="little heading">
                        <p className="text-xs font-bold">ABOUT MARCH</p>
                    </div>
                    <div className="MainHeading text-6xl pt-5 md:pt-0 md:text-9xl leading-tight font-semibold">Our Story</div>
                    <div className="subHeading mt-5 text-2xl md:text-2xl font-medium leading-normal w-full md:w-5/6">Our vision is to empower brands with purpose and positive impact to thrive.</div>
                    <div className="Paragraph mt-5 md:text-xl">At March, we believe that when brands act with integrity and contribute to society, they not only succeed, but also inspire others to do the same. Our goal is to help those brands grow and create meaningful, lasting change.</div>
                    <div className="Paragraph mt-5 md:text-xl">We do this by bringing stories to life with authenticity and purpose, crafting brands and digital experiences that resonate with audiences and deliver genuine impact. We’re built on trust, fuelled by creativity, and focused on achieving results that matter.</div>
                    <div className="linkToContact flex flex-col md:flex-row md:text-xl mt-5">
                        <a href="#" className="underline">Reach out,</a>
                        <p className="#">and let’s build something extraordinary together.</p>
                    </div>

                    {/*Phone number and e mail*/}
                    <div className="Contact md:text-xl mt-10">
                        <a href="#" className="flex gap-7">
                            <i className="fa-solid fa-location-arrow text-3xl md:text-4xl"></i>
                            <p>hello@marchbranding.com</p>
                        </a>
                        <a href="#" className="flex mt-2 md:mt-5 gap-7">
                            <i className="fa-solid fa-mobile text-2xl pl-1 md:pl-0 md:text-3xl"></i>
                            <p className="pt-1">+44 (0)330 3330252</p>
                        </a>
                    </div>
                </div>

                {/*Div showing statics*/}
                <div className="Statics flex md:flex-row flex-col  justify-around py-16 text-5xl  md:text-7xl font-medium gap-y-14 md:gap-y-0 md:font-semibold">
                    <div className="stat text-center">
                        <div className="counter" data-target="60">0</div>
                        <p className="mt-2 text-xl">Happy Clients</p>
                    </div>
                    <div className="stat text-center">
                        <div className="counter" data-target="1000">0</div>
                        <p className="mt-2 text-xl">Successful Projects</p>
                    </div>
                    <div className="stat text-center">
                        <div className="counter" data-target="3">0</div>
                        <p className="mt-2 text-xl">Awards Won</p>
                    </div>
                    <div className="stat text-center">
                        <div className="counter" data-target="9">0</div>
                        <p className="mt-2 text-xl">Years Established</p>
                    </div>
                    <div className="stat text-center">
                        <div className="counter" data-target="5">0</div>
                        <p className="mt-2 text-xl">Google Reviews</p>
                    </div>
                </div>

                {/*Image under the stats*/}
                <div className="Image w-full h-auto">
                    <img src="https://marchbranding.com/wp-content/uploads/2024/11/march-office-design-office.webp" alt="Image" />
                </div>

                {/*This part contains the brands logos*/}
                <div className="BrandLogos px-5 md:px-0">
                    <h4 className="text-xl md:text-2xl font-semibold pt-10 md:pt-40 pb-10 md:pb-16 text-center">As Trusted By</h4>
                    <div className="flex flex-wrap justify-between gap-9 md:gap-9 md:mt-8">
                        {logos.map((logo) => (
                            <div key={logo.id} className="w-16 md:w-32 h-auto flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-75">
                                <img src={logo.src} alt={logo.alt} className="w-28 h-28 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/*Part of page having the founders cards*/}
                <div className="FoundersSection mt-16 md:mt-32">
                    <div className="SomeText w-full flex text-center flex-col justify-center align-middle items-center pb-24">
                        <div className="Heading w-full md:w-1/2">
                            <p className="text-3xl md:text-5xl font-bold pb-9 md:pb-12">Our Founders</p>
                        </div>
                        <div className="paragraph w-full md:w-1/2">
                            <p className="md:text-xl">March is an independent branding and digital agency, founded in 2015 by Peter Burch and Adam Maidment. Driven by a shared passion for helping brands grow and make a lasting impact, they’ve built a talented team across the UK. Our corporate partners include Business Design Centre, Self Space, Sarah Vanrenen, Beata Heuman, Anna Spiro, Healthy Back Bag, Intelligent People, Dishmatic, and many more.</p>
                        </div>
                    </div>
                    <div className="Cards flex md:flex-row flex-col justify-between">
                        <div className="card1 flex flex-col w-full md:w-2/5">
                            <div className="FounderImage">
                                <img src="https://marchbranding.com/wp-content/uploads/2024/11/profile-peter-1024x683.webp" alt="" />
                            </div>
                            <div className="NameAndRank py-5 md:py-10">
                                <p className="Name text-3xl md:text-5xl font-semibold">Peter Burch</p>
                                <p className="Rank md:pt-3 text-xl md:text-2xl font-medium">Co-founder</p>
                            </div>
                            <div className="details md:text-xl">
                                <p>As March’s Design Director, Peter leads branding and design projects with a thoughtful and empathetic approach. With a background in fine arts, his journey into the digital world began with a passion for video games like Quake and Doom. Today, Peter thrives in the intersection of creativity and technology, where his artistic vision and digital expertise come together to create meaningful, impactful designs.</p>
                                <p className="mt-3">Outside of work, Peter follows professional wrestling, the Arsenal, and considers himself as a bit of a “DIY expert” (hint – he’s not).</p>
                            </div>
                        </div>
                        <div className="card2 flex flex-col w-full mt-24 md:w-2/5">
                            <div className="FounderImage">
                                <img src="https://marchbranding.com/wp-content/uploads/2024/11/profile-alm.webp" alt="Co Founder 2 pic" />
                            </div>
                            <div className="NameAndRank py-10">
                                <p className="Name text-5xl font-semibold">Adam Maidment</p>
                                <p className="Rank pt-3 text-2xl font-medium">Co-founder</p>
                            </div>
                            <div className="details text-xl">
                                <p>With a degree in Computer Science and nearly 25 years of development experience, Adam leads the technical side of March, leveraging his expertise across different languages and platforms to deliver exceptional results.</p>
                                <p className="mt-3">As an OG founder, Adam thrives in simplifying complex situations, making the technical side of our work accessible to both clients and the team. His knack for problem-solving and clear communication has been pivotal in driving March’s success.</p>
                                <p className="mt-3">Though his official title is Director, Adam’s true impact is felt through his ability to bridge the gap between the technical and creative worlds. If there were ever a “Web Master,” Adam would certainly hold that title with pride.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LOGOImage w-full ">
                    <div className="Theimage pt-20">
                        <img src="https://marchbranding.com/wp-content/uploads/2024/11/March-Branding-Business-Cards-Widescreen.webp" alt="March Branding Image" />
                    </div>
                </div>
                <div className="ValuesSection mt-12 flex justify-between">
                    <div className="Heading w-1/2">
                        <h3 className="text-7xl sticky top-40">Our Values</h3>
                    </div>
                    <div className="Values w-1/2">
                        <h4 className="text-5xl">Authentic</h4>
                        <p className="text-xl py-8">We’re personal and plain spoken. We nurture trust within our team and clientele, and engage in those challenging conversations when the occasion requires.</p>

                        <h4 className="text-5xl">Prudent</h4>
                        <p className="text-xl py-8">We do things properly and are meticulous in our attention to detail. We take a measured approach and always have your long-term success in mind.</p>

                        <h4 className="text-5xl">Inventive</h4>
                        <p className="text-xl py-8">We love solving problems through design. We value challenging the status quo and doing things in a better way.</p>

                        <h4 className="text-5xl">Dependable</h4>
                        <p className="text-xl py-8">We have a responsibility to our team and our clients. We’re with you every step of the way, committed to your success and always ready to roll up our sleeves.</p>

                        <h4 className="text-5xl">Gritty</h4>
                        <p className="text-xl py-8">We’re tenacious and determined. We get sh*t done – without faff or fanfare.</p>
                    </div>
                </div>

                <div className="Image py-20">
                    <img src="https://marchbranding.com/wp-content/uploads/2024/11/march-office-design-studio.webp" alt="Image" />
                </div>

                <section className="min-h-screen flex flex-col items-center justify-center space-y-6 pt-16 px-4">
                    {reviews.length > 0 ? (
                        <div className="max-w-4xl text-center">
                            <p className="text-5xl font-semibold mb-4">{reviews[currentReview].statement}</p>
                            <p className="text-2xl mt-10 font-medium">{reviews[currentReview].name}</p>
                            <p className="text-lg text-gray-400">{reviews[currentReview].designation}</p>
                        </div>
                    ) : (
                        <p className="text-2xl font-medium">No reviews available.</p>
                    )}
                    <div className="flex space-x-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentReview(index)}
                                className={`w-4 h-4 rounded-full ${index === currentReview ? 'bg-white' : 'bg-gray-400'}`}
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
            <EnquirySection />

        </section>


    );
};

export default About;