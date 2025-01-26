import React from "react";
import EnquirySection from './EnquirySection';

const InteriorDesigners = () => {

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

    return (
        <section>
            <div className="InteriorDesignors text-white font-outfit pt-32 md:pt-40 px-5 md:px-20 bg-customGray">

                {/*Hreo section of this page*/}

                <div className="hero flex flex-wrap md:flex-nowrap gap-7">

                    {/*Left part of the page which has some text*/}

                    <div className="TextPart w-full md:w-1/2">
                        <div className="MainHeading text-4xl md:text-7xl leading-tight font-medium">Websites and Branding for Interior Designers</div>
                        <div className="subHeading mt-5 text-xl md:text-2xl font-medium leading-normal w-5/6">At March, we specialise in creating brands and websites tailored to the unique needs of the interior design industry.</div>
                        <div className="Paragraph mt-5 text-base md:text-xl">From cutting-edge e-commerce platforms to complete brand transformations, we’ve partnered with some of the most respected names in the interior design and build industry. Explore our portfolio below or contact us to discover how March can help elevate your interior design practice.</div>
                        <div className="Contact text-xl mt-10">
                            <a href="#" className="flex gap-7">
                                <i className="fa-solid fa-location-arrow text-3xl md:text-4xl"></i>
                                <p>hello@marchbranding.com</p>
                            </a>
                            <a href="#" className="flex mt-5 gap-7">
                                <i class="fa-solid fa-mobile text-2xl pl-1 md:pl-0 md:text-3xl"></i>
                                <p className="pt-1">+44 (0)330 3330252</p>
                            </a>
                        </div>
                    </div>

                    {/*Right side of the screen which has logos*/}

                    <div className="LogosPart w-full md:w-1/2">
                        <div className="flex flex-wrap justify-around md:justify-center gap-8 ">
                            {logos.map((logo) => (
                                <div key={logo.id} className="w-16 md:w-32 h-auto flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-75">
                                    <img src={logo.src} alt={logo.alt} className="w-28 h-28 object-contain" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/*Next Part after Hero having two cards in it*/}

                <div className="TwoCards flex flex-wrap flex-col md:flex-row justify-between mt-24">

                    {/*Card number 1*/}

                    <div className="Card1 w-full md:w-5/12 flex flex-col">
                        <div className="image w-full h-auto">
                            <img src="https://marchbranding.com/wp-content/uploads/2024/09/Anna-Spiro-Brand-Identity-high.gif" alt="Anna Spiro Image" />
                        </div>
                        <div className="Heading py-7 ">
                            <h3 className="text-3xl md:text-5xl font-semibold">Annq Spiro</h3>
                        </div>
                        <div className="SubHeading font-medium leading-snug text-2xl">Anna Spiro is one of the world’s most inventive interior designers, whose distinctive style and approach gained her international acclaim.</div>
                        <div className="Text mt-10">
                            <p className="text-base md:text-xl">
                                Anna sought March’s expertise to redesign Spiro Store and improve its functionality, particularly to allow her to sell fabrics and wallpapers to a wider audience.
                            </p>
                        </div>
                        <div className="Button mt-8">
                            <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                <span className="relative z-10 group-hover:text-black">View Case Study</span>
                                <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                            </button>

                        </div>
                    </div>

                    {/*Card number 2*/}

                    <div className="Card1 w-full md:w-5/12 pt-40 flex flex-col">
                        <div className="image w-full h-auto">
                            <img src="https://marchbranding.com/wp-content/uploads/2024/11/interior-designer-beata-heuman-website.webp" alt="Beata Heuman Image" />
                        </div>
                        <div className="Heading py-7 ">
                            <h3 className="text-3xl md:text-5xl font-semibold">Beata Heuman</h3>
                        </div>
                        <div className="SubHeading font-medium leading-snug text-2xl">Beata Heuman is a hugely successful and celebrated interior designer..</div>
                        <div className="Text mt-10">
                            <p className="text-base md:text-xl">
                                Since 2016, March has supported Beata Heuman’s ever-expanding interior design practice with its digital expertise. This has included building a portfolio website and an eCommerce store created in Shopify.                            </p>
                        </div>
                        <div className="Button mt-8">
                            <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                <span className="relative z-10 group-hover:text-black">View Case Study</span>
                                <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                            </button>

                        </div>
                    </div>

                </div>

                {/*Review Text*/}
                <div className="Review1 flex flex-col items-start md:items-center py-32">
                    <p className="text-3xl md:text-5xl text-start font-medium md:text-center leading-snug">"March helped us build a great platform from which we can showcase our work. With their help, we achieved the original and contemporary look we were after – and our clients seem to love it!"</p>
                    <p className="text-xl md:text-3xl mt-4">Beata Heuman</p>
                </div>

                {/*Next Part of the screen that has four cards in it*/}

                <div className="FourCards">
                    <div className="TwoCards flex flex-col md:flex-row justify-between mt-24">

                        {/*Card number 1 of 4*/}

                        <div className="Card1 w-full md:w-5/12 flex flex-col">
                            <div className="image w-full h-auto">
                                <img src="https://marchbranding.com/wp-content/uploads/2024/11/interior-design-flora-soames-website.webp" alt="Anna Spiro Image" />
                            </div>
                            <div className="Heading py-7 ">
                                <h3 className="text-3xl md:text-5xl font-semibold">Annq Spiro</h3>
                            </div>
                            <div className="SubHeading font-medium leading-snug text-2xl">Anna Spiro is one of the world’s most inventive interior designers, whose distinctive style and approach gained her international acclaim.</div>
                            <div className="Text mt-10">
                                <p className="text-base md:text-xl">
                                    Anna sought March’s expertise to redesign Spiro Store and improve its functionality, particularly to allow her to sell fabrics and wallpapers to a wider audience.
                                </p>
                            </div>
                            <div className="Button mt-8">
                                <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                    <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                    <span className="relative z-10 group-hover:text-black">View Case Study</span>
                                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                                </button>

                            </div>
                        </div>

                        {/*Card number 2 of 4*/}

                        <div className="Card2 w-full md:w-5/12 pt-40 flex flex-col">
                            <div className="image w-full h-auto">
                                <img src="https://marchbranding.com/wp-content/uploads/2024/11/interior-designer-studio-hollond.webp" alt="Anna Spiro Image" />
                            </div>
                            <div className="Heading py-7 ">
                                <h3 className="text-3xl md:text-5xl font-semibold">Annq Spiro</h3>
                            </div>
                            <div className="SubHeading font-medium leading-snug text-2xl">Anna Spiro is one of the world’s most inventive interior designers, whose distinctive style and approach gained her international acclaim.</div>
                            <div className="Text mt-10">
                                <p className="text-base md:text-xl">
                                    Anna sought March’s expertise to redesign Spiro Store and improve its functionality, particularly to allow her to sell fabrics and wallpapers to a wider audience.
                                </p>
                            </div>
                            <div className="Button mt-8">
                                <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                    <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                    <span className="relative z-10 group-hover:text-black">View Case Study</span>
                                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                                </button>

                            </div>
                        </div>

                    </div>

                    <div className="TwoCards flex flex-col md:flex-row justify-between mt-24">

                        {/*Card number 3 of 4*/}

                        <div className="Card3 w-full md:w-5/12 pt-40 flex flex-col">
                            <div className="image w-full h-auto">
                                <img src="https://marchbranding.com/wp-content/uploads/2024/09/Anna-Spiro-Brand-Identity-high.gif" alt="Anna Spiro Image" />
                            </div>
                            <div className="Heading py-7 ">
                                <h3 className="text-5xl font-semibold">Annq Spiro</h3>
                            </div>
                            <div className="SubHeading font-medium leading-snug text-2xl">Anna Spiro is one of the world’s most inventive interior designers, whose distinctive style and approach gained her international acclaim.</div>
                            <div className="Text mt-10">
                                <p className="text-xl">
                                    Anna sought March’s expertise to redesign Spiro Store and improve its functionality, particularly to allow her to sell fabrics and wallpapers to a wider audience.
                                </p>
                            </div>
                            <div className="Button mt-8">
                                <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                    <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                    <span className="relative z-10 group-hover:text-black">View Case Study</span>
                                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                                </button>

                            </div>
                        </div>

                        {/*Card number 4 of 4*/}

                        <div className="Card4 w-full md:w-5/12 pt-40 flex flex-col">
                            <div className="image w-full h-auto">
                                <img src="https://marchbranding.com/wp-content/uploads/2024/09/Anna-Spiro-Brand-Identity-high.gif" alt="Anna Spiro Image" />
                            </div>
                            <div className="Heading py-7 ">
                                <h3 className="text-5xl font-semibold">Annq Spiro</h3>
                            </div>
                            <div className="SubHeading font-medium leading-snug text-2xl">Anna Spiro is one of the world’s most inventive interior designers, whose distinctive style and approach gained her international acclaim.</div>
                            <div className="Text mt-10">
                                <p className="text-xl">
                                    Anna sought March’s expertise to redesign Spiro Store and improve its functionality, particularly to allow her to sell fabrics and wallpapers to a wider audience.
                                </p>
                            </div>
                            <div className="Button mt-8">
                                <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center space-x-4">
                                    <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                    <span className="relative z-10 group-hover:text-black">View Case Study</span>
                                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:text-black text-lg transition-transform duration-300 group-hover:translate-x-2"></i>
                                </button>

                            </div>
                        </div>

                    </div>

                </div>

                {/*Review number 2*/}
                <div className="Review1 flex flex-col items-start md:items-center py-10 md:py-32">
                    <p className="md:text-5xl text-3xl text-start md:text-center leading-snug">"March helped us build a great platform from which we can showcase our work. With their help, we achieved the original and contemporary look we were after – and our clients seem to love it!"</p>
                    <p className="text-xl font-bold md:text-3xl mt-4">Beata Heuman</p>
                </div>

            </div>
            <EnquirySection />

        </section>
    );
};

export default InteriorDesigners;
