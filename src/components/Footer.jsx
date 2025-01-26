import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section className="bg-customGray pt-24">
            <footer className=" text-white p-4 md:p-20 text-lg h-auto">

                {/* Upper Left side of the footer containing the logo and contact details */}
                <div className="UpperLeftSide flex flex-col md:flex-row">
                    <div className="leftSide md:w-1/2 mb-10 md:mb-0">
                        <div className="logo w-32 md:w-48 mb-6 md:mb-10">
                            <img src="https://marchbranding.com/wp-content/uploads/2024/08/March-Branding-Logo-PB-2024.svg" alt="Company Logo" />
                        </div>
                        <div className="contacts">
                            <h6 className="font-bold py-3 md:py-5">
                                Contact
                            </h6>
                            <div className="contactLinks flex flex-col font-semibold mb-6 md:mb-11">
                                <a href="#">hello@marchbranding.com</a>
                                <a href="#">+44 (0)330 3330252</a>
                            </div>
                        </div>
                        <div className="socialLinks text-2xl md:text-4xl">
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" className="pl-3"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* Upper Right side of the footer containing links to all pages */}
                    <div className="UpperRightSide flex flex-col md:flex-row md:w-2/5 text-base font-medium justify-between">
                        <ul className="space-y-3 md:space-y-5 mb-5">
                            <li><Link to="/case-studies" className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-lime-200"}>Case Studies</Link></li>
                            <li><Link to="/services" className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-lime-200"}>Services</Link></li>
                            <li><Link to="/interior-designers" className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-lime-200"}>Interior Designers</Link></li>
                            <li><Link to="/insights" className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-lime-200"}>Insights</Link></li>
                        </ul>

                        <ul className="space-y-3 md:space-y-5">
                            <li><Link to="/about" className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-lime-200"}>About</Link></li>
                            <li><Link to="/contact" className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-lime-200"}>Contact</Link></li>
                            <li><Link to="#">Newsletter</Link></li>
                            <li><Link to="#">For Interior Designers</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Lower Left side of the footer containing some images */}
                <div className="LowerSide flex flex-col md:flex-row mt-10 md:mt-24 justify-start md:justify-between w-1/2 md:w-full">
                    <div className="someImages flex flex-wrap md:flex-nowrap md:space-x-14">

                        <img src="https://marchbranding.com/wp-content/uploads/2024/02/logo-google-rating.svg" alt="Google Rating" className="w-16 md:w-auto" />

                        <img src="https://marchbranding.com/wp-content/uploads/2024/02/logo-google-analytics-certified.svg" alt="Google Analytics" className="w-16 md:w-auto pl-4" />

                        <a href="#"><img src="https://marchbranding.com/wp-content/uploads/2024/02/clutchco-1.svg" alt="clutch" className="w-16 md:w-auto pt-2" /></a>
                        <a href="#"><img src="https://marchbranding.com/wp-content/uploads/2024/02/Awwards-logotype-2018-1.svg" alt="Awwards" className="w-20 md:w-auto pt-3 pl-4" /></a>
                    </div>

                    {/* Lower side of the footer containing terms and privacy policy */}
                    <div className="CopyRight flex text-xs w-screen md:w-auto font-semibold mt-6 md:mt-0">
                        <i className="fa-regular fa-copyright pt-1 pr-1"></i>
                        <p>2024 March Branding Ltd | Terms | Privacy Policy | Sitemap</p>
                    </div>
                </div>

            </footer>
        </section>
    );
};
export default Footer;
