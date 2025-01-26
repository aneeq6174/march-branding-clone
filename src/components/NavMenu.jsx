// import React from "react";

// const NavMenu = ({ isOpen, toggleMenu }) => {
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black h-screen w-screen bg-opacity-90 flex items-center justify-center z-30">
//           {/* Close Button */}
//           <button
//                 onClick={toggleMenu}
//                 className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
//                 aria-label="Close menu">
//                 <i class="fa-solid fa-xmark"></i>    
//           </button>

//           {/* Menu Items */}
//           <ul className="text-center space-y-8 text-2xl font-bold text-white">
//             <li className="hover:text-gray-400 cursor-pointer">Case Studies</li>
//             <li className="hover:text-gray-400 cursor-pointer">Services</li>
//             <li className="hover:text-gray-400 cursor-pointer">Interior Designers</li>
//             <li className="hover:text-gray-400 cursor-pointer">Insights</li>
//             <li className="hover:text-gray-400 cursor-pointer">About</li>
//             <li className="hover:text-gray-400 cursor-pointer">Contact</li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavMenu;

















import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black h-screen w-screen bg-opacity-90 flex items-center justify-center z-30">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Menu Items */}
          <ul className="text-center space-y-8 text-2xl font-bold text-white">
            <li onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">
              <Link to="/interior-designers">Interior Designers</Link>
            </li>
            <li onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">
              <Link to="/insights">Insights</Link>
            </li>
            <li onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li onClick={toggleMenu} className="hover:text-gray-400 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavMenu;
