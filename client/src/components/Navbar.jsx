import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import StartupMissionLogo from "./startupMissionLogo";

function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navbarItems = [
    { text: "HOME", href: "/" },
    { text: "ABOUT", href: "/" },
    { text: "SPEAKERS", href: "/" },
    { text: "EVENTS", href: "/" },
    { text: "VENUE", href: "/" },
  ];
  return (
    <nav className="font-dm-sans font-[600] py-4 w-9/12 self-center ">
      <div className="hidden md:flex md:justify-between">
        <StartupMissionLogo />
        {navbarItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            hover="cursor-pointer"
            className="self-center hover:text-blue-400"
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="md:hidden items-center justify-center flex">
        <StartupMissionLogo />
        <button onClick={toggleDropDown}>
          <FaBars className="text-2xl" />
        </button>
        {isDropDownOpen && (
          <div className="absolute top-20 left-0 right-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-2xl">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                className="mx-4 my-2 text-gray-500  hover:text-white"
                href={item.href}
                onClick={toggleDropDown}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
