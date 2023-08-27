import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavLogo from "../assets/img/about/CET.png";

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
    <div className="font-dm-sans font-[600] py-4 w-9/12 self-center flex flex-row justify-between">
      <img className="h-10 w-10 " src={NavLogo} alt="Navbar Logo" />
      <h1 className="self-center">HOME</h1>
      <h1 className="self-center">ABOUT</h1>
      <h1 className="self-center">SPEAKERS</h1>
      <h1 className="self-center">SCHEDULE</h1>
      <h1 className="self-center">EVENTS</h1>
      <h1 className="self-center">VENUE</h1>
    </div>
  );
}

export default Navbar;
