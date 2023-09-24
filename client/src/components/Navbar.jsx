import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import StartupMissionLogo from "./startupMissionLogo";

function Navbar({ navbarItems }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [blur, setBlur] = useState(false);
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPrgress = (winScroll / height) * 100;

    setScroll(scrollPrgress);
    console.log(scrollPrgress);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    const scrollHandler = () => {
      setBlur(window.scrollY <= 80);
      setIsDropDownOpen(false);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToSection = (ref) => {
    toggleDropDown();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`font-dm-sans font-[600] py-4 w-full self-center fixed top-0 z-50 transition-shadow transition-colors duration-500 ${
        !blur && "backdrop-blur-lg shadow-[0px_4px_4px_0px_#00000017]"
      } ${isDropDownOpen && "bg-white"}`}
    >
      <div className="hidden md:flex md:justify-evenly">
        <a href="/" className="cursor-pointer">
          <StartupMissionLogo />
        </a>
        {navbarItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="self-center hover:text-blue-400"
            onClick={() => scrollToSection(item.sectionRef)}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="md:hidden items-center justify-around flex duration-500">
        <StartupMissionLogo />
        <button onClick={toggleDropDown}>
          <FaBars className="text-2xl" />
        </button>

        <div
          className={`absolute top-20 left-0 right-0 flex flex-col items-center justify-center bg-white text-2xl duration-500 ${
            isDropDownOpen ? "translate-y-0" : "-translate-y-80"
          }`}
        >
          {navbarItems.map((item, index) => (
            <a
              key={index}
              className="mx-4 my-2 text-gray-500  hover:text-white"
              href={item.href}
              onClick={() => scrollToSection(item.sectionRef)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
      <div className={`absolute bottom-0 bg-[#3866F2] h-1`} style={{width: `${scroll}%`}}></div>
    </nav>
  );
}

export default Navbar;

// box-shadow: 0px 4px 4px 0px #00000017;
