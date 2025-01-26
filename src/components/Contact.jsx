import React from "react";

const Contact = () => {
    return (
        <section className="pt-16 bg-customGray font-outfit">
            <div className="EnquirySection w-full text-white min-h-screen pt-24 flex flex-col md:flex-row justify-around">

                {/* Left side of this section */}
                <div className="leftSide w-full md:w-2/5 text-start md:text-left px-4">
                    <div className="mainHeading">
                        <p className="text-xs font-bold">CONTACT MARCH</p>
                        <h2 className="text-6xl md:text-9xl font-semibold mt-3 leading-tight">
                            Let's Talk
                        </h2>
                    </div>
                    <div className="subText mt-6 md:mt-8">
                        <p className="font-medium text-xl md:text-2xl w-full md:w-4/5 leading-normal py-4 md:py-8">
                            March partner with ambitious brands. Reach out, and let’s build something extraordinary together.
                        </p>
                    </div>
                    <div className="contactDetails mt-4 md:mt-6">
                        <div className="mail flex justify-start text-xl md:text-2xl pb-3">
                            <div className="icon">
                                <i className="fa-regular fa-paper-plane pr-4"></i>
                            </div>
                            <div className="text">
                                <a href="#" className="hover:text-[#e1ee7b]">hello@marchbranding.com</a>
                            </div>
                        </div>
                        <div className="PhoneNumber flex justify-start text-xl md:text-2xl pt-2">
                            <div className="icon">
                                <i className="fa-solid fa-mobile pr-4"></i>
                            </div>
                            <div className="numbers">
                                <a href="#" className="hover:text-[#e1ee7b]">+44 (0)330 3330252</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-2/5 text-lg leading-relaxed px-4 mt-8 md:mt-0">
                    <form className="p-6 rounded-lg">
                        {/* Subject Dropdown */}
                        <div className="SubjectDropDown mb-4">
                            <select className="mt-1 block w-full border-b-2 border-white bg-transparent text-lg p-2 focus:outline-none">
                                <option>Subject</option>
                                <option>I'm looking for a quote</option>
                                <option>I'm offering my own services</option>
                                <option>I'm interested in a business partnership</option>
                                <option>I'm looking for a job</option>
                                <option>I'm just signing up for your newsletter</option>
                            </select>
                        </div>

                        {/* Name Inputs */}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                            <div className="w-full md:w-1/2">
                                <input
                                    type="text"
                                    className="mt-1 block w-full border-b-2 border-white bg-transparent p-2 placeholder:text-[#757575] focus:outline-none"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <input
                                    type="text"
                                    className="mt-1 block w-full border-b-2 border-white bg-transparent p-2 placeholder:text-[#757575] focus:outline-none"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        {/* Email & Phone Inputs */}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                            <div className="w-full md:w-1/2">
                                <input
                                    type="email"
                                    className="mt-1 block w-full border-b-2 border-white bg-transparent p-2 placeholder:text-[#757575] focus:outline-none"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <input
                                    type="tel"
                                    className="mt-1 block w-full border-b-2 border-white bg-transparent p-2 placeholder:text-[#757575] focus:outline-none"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-4">
                            <textarea
                                className="mt-6 block w-full border-b-2 border-white bg-transparent p-2 placeholder:text-[#757575] focus:outline-none"
                                rows="4"
                                placeholder="Tell us about your project or enquiry"
                            ></textarea>
                        </div>

                        {/* Newsletter Checkbox */}
                        <div className="checkBoxArea font-medium text-sm">
                            <p className="py-1 text-base">
                                Get the good stuff by ticking the box below. You can unsubscribe at any time.
                            </p>
                            <div className="flex py-3 items-center mb-4">
                                <input
                                    type="checkbox"
                                    className="mr-2 h-5 w-5"
                                />
                                <label>Sign up to the March Newsletter</label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="px-8 py-3 text-xl font-semibold rounded-full border-2 border-white text-white relative overflow-hidden group flex items-center justify-center">
                            <span className="absolute inset-0 bg-white w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
                            <span className="relative z-10 group-hover:text-black">Submit Enquiry</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
