// import React from "react";

// const EnquirySection = () => {
//   return (
//     <section>
//       <div className="EnquirySection w-full h-screen pt-24 bg-[#e1ee7b] flex justify-around text-[#303231]">

//         {/* Left side of this section */}
//         <div className="leftSide w-2/5">
//           <div className="mainHeading w-auto">
//             <h2 className="text-7xl font-medium leading-tight">
//               Join the brands surging ahead with March
//             </h2>
//           </div>
//           <div className="subText">
//             <p className="font-medium text-xl w-3/4 leading-normal py-8">
//               We collaborate with ambitious brands, whether you’re a dynamic start-up or an established organisation. Reach out, and let’s build something extraordinary together.
//             </p>
//           </div>
//           <div className="contactDetails">
//             <div className="mail flex text-2xl pb-3">
//               <div className="icon">
//                 <i className="fa-regular fa-paper-plane pr-4"></i>
//               </div>
//               <div className="text">
//                 <p className="">hello@marchbranding.com</p>
//               </div>
//             </div>
//             <div className="PhoneNumber flex text-2xl pt-2">
//               <div className="icon">
//                 <i className="fa-solid fa-mobile pr-4"></i>
//               </div>
//               <div className="numbers">
//                 <p className="">+44 (0)330 3330252</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Contact Form */}
//         <div className="w-2/5 text-lg leading-relaxed">
//           <form className="p-6">
//             {/* Subject Dropdown */}
//             <div className="SubjectDropDown mb-4">
//               <select className="mt-1 block w-full border-b-2 border-black bg-transparent text-lg p-2 focus:outline-none">
//                 <option>Subject</option>
//                 <option>I'm looking for a quote</option>
//                 <option>I'm offering my own services</option>
//                 <option>I'm interested in a business partnership</option>
//                 <option>I'm looking for a job</option>
//                 <option>I'm just signing up for your newsletter</option>
//               </select>
//             </div>

//             {/* Name Inputs */}
//             <div className="flex space-x-4 mb-4">
//               <div className="w-1/2">
//                 <input
//                   type="text"
//                   className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
//                   placeholder="First Name"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <input
//                   type="text"
//                   className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
//                   placeholder="Last Name"
//                 />
//               </div>
//             </div>

//             {/* Email & Phone Inputs */}
//             <div className="flex space-x-4 mb-4">
//               <div className="w-1/2">
//                 <input
//                   type="email"
//                   className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
//                   placeholder="Email Address"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <input
//                   type="tel"
//                   className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
//                   placeholder="Phone Number"
//                 />
//               </div>
//             </div>

//             {/* Project Description */}
//             <div className="mb-4">
//               <textarea
//                 className="mt-6 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
//                 rows="4"
//                 placeholder="Tell us about your project or enquiry"
//               ></textarea>
//             </div>

//             {/* Newsletter Checkbox */}
//             <div className="checkBoxArea font-medium text-sm text-black">
//               <p className="py-1">
//                 Get the good stuff by ticking the box below. You can unsubscribe at any time.
//               </p>
//               <div className="flex py-3 items-center mb-4">
//                 <input
//                   type="checkbox"
//                   className="mr-2 h-5 w-5"  // Adjusted checkbox size here
//                 />
//                 <label className="">Sign up to the March Newsletter</label>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button className="bg-black px-6 py-3 rounded-full w-auto font-bold text-[#e3eb7b] text-center">
//               Submit Enquiry
//             </button>
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default EnquirySection;






























import React from "react";

const EnquirySection = () => {
  return (
    <section>
      <div className="EnquirySection w-full min-h-screen pt-10 md:pt-24 bg-[#e1ee7b] flex flex-col lg:flex-row justify-around items-center text-[#303231]">

        {/* Left side of this section */}
        <div className="leftSide w-full lg:w-2/5 px-6 lg:px-0 mb-10 lg:mb-0 text-start md:text-center lg:text-left">
          <div className="mainHeading w-auto">
            <h2 className="text-4xl lg:text-7xl font-medium leading-tight">
              Join the brands surging ahead with March
            </h2>
          </div>
          <div className="subText">
            <p className="font-medium text-lg lg:text-xl w-full lg:w-3/4 leading-normal py-6 lg:py-8">
              We collaborate with ambitious brands, whether you’re a dynamic start-up or an established organisation. Reach out, and let’s build something extraordinary together.
            </p>
          </div>
          <div className="contactDetails">
            <div className="mail flex justify-start text-lg lg:text-2xl pb-3">
              <div className="icon">
                <i className="fa-regular fa-paper-plane pr-4"></i>
              </div>
              <div className="text">
                <p>hello@marchbranding.com</p>
              </div>
            </div>
            <div className="PhoneNumber flex justify-start lg:justify-start text-lg lg:text-2xl pt-2">
              <div className="icon">
                <i className="fa-solid fa-mobile pr-4"></i>
              </div>
              <div className="numbers">
                <p>+44 (0)330 3330252</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-2/5 text-start md:px-6 lg:px-0 text-lg leading-relaxed">
          <form className="p-6">
            {/* Subject Dropdown */}
            <div className="SubjectDropDown mb-4">
              <select className="mt-1 block w-full border-b-2 border-black bg-transparent text-lg p-2 focus:outline-none">
                <option>Subject</option>
                <option>I'm looking for a quote</option>
                <option>I'm offering my own services</option>
                <option>I'm interested in a business partnership</option>
                <option>I'm looking for a job</option>
                <option>I'm just signing up for your newsletter</option>
              </select>
            </div>

            {/* Name Inputs */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
              <div className="w-full lg:w-1/2">
                <input
                  type="text"
                  className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <input
                  type="text"
                  className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email & Phone Inputs */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
              <div className="w-full lg:w-1/2">
                <input
                  type="email"
                  className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <input
                  type="tel"
                  className="mt-1 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-4">
              <textarea
                className="mt-6 block w-full border-b-2 border-black bg-transparent p-2 placeholder:text-[#555] focus:outline-none"
                rows="4"
                placeholder="Tell us about your project or enquiry"
              ></textarea>
            </div>

            {/* Newsletter Checkbox */}
            <div className="checkBoxArea font-medium text-sm text-black">
              <p className="py-1">
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
            <button className="bg-black px-6 py-5 rounded-full w-2/3 lg:w-auto font-bold text-[#e3eb7b] text-center">
              Submit Enquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default EnquirySection;
