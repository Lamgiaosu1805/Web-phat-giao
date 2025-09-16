import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path) =>
    `hover:text-bud-primary ${
      pathname === path
        ? "text-bud-primary font-semibold"
        : "text-neutral-900"
    }`;

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-8">
          {/* Logo */}
          <div className="font-inter font-medium text-[40px] leading-[48px] tracking-normal text-center text-bud-primary">
            BUDDHISM
          </div>

          {/* Menu desktop */}
          <div className="hidden space-x-6 md:flex">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/teacher" className={linkClass("/teacher")}>
              Teacher
            </Link>
            <Link to="/lecture" className={linkClass("/lecture")}>
              Lecture & Scriptures
            </Link>
            <Link to="/event" className={linkClass("/event")}>
              Event & Retreat
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer text-bud-primary hover:text-bud-primary-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Slide-in menu (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-bud-primary">Menu</h2>
          <button onClick={toggleMenu}>
            <X size={24} className="cursor-pointer text-bud-primary" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={toggleMenu} className={linkClass("/")}>
            Home
          </Link>
          <Link to="/teacher" onClick={toggleMenu} className={linkClass("/teacher")}>
            Teacher
          </Link>
          <Link to="/lecture" onClick={toggleMenu} className={linkClass("/lecture")}>
            Lecture & Scriptures
          </Link>
          <Link to="/event" onClick={toggleMenu} className={linkClass("/event")}>
            Event & Retreat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
