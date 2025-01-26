import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-customGray text-white fixed top-0 w-screen transition-transform duration-300 z-50 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="h-20 md:h-28 w-screen flex items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="logo text-3xl w-2/5 font-bold  tracking-wide">
          <NavLink to="/">MARCH</NavLink>
        </div>

        {/* Hamburger Button (visible on small screens) */}
        <div className="lg:hidden  md:pr-10">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Menu Items (visible on medium and larger screens) */}
        <div className="hidden lg:flex w-3/5 justify-around">
          <ul className="flex w-full justify-evenly text-lg font-medium">
            <li className="px-2">
              <NavLink
                to="/case-studies"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:text-lime-200"
                }
              >
                Case Studies
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:text-lime-200"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/interior-designers"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:text-lime-200"
                }
              >
                Interior Designers
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:text-lime-200"
                }
              >
                Insights
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:text-lime-200"
                }
              >
                About
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : "hover:text-lime-200"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* NavMenu Component */}
      <NavMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
