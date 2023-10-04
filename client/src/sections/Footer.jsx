import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import KSUMlogo from "../assets/img/footer/KSUM logo.png";
import IEDClogo from "../assets/img/footer/IEDC logo.png";
import cetLogo from "../assets/img/footer/Cet_emblem.png";
import IEDCcetLogo from "../assets/img/footer/IEDC CET logo.png";

import Team from "../components/Team";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f1f] pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          {/* First Grid Item */}
          <div className="flex md:w-1/2 p-5 flex-col items-center border-b md:border-b-0 md:border-r border-[#ccc] mb-4">
            <div className="flex flex-col md:flex-row w-full md:justify-evenly items-center mb-2">
              <img src={KSUMlogo} className="h-24 md:w-30" alt="KSUM Logo" />
              <img src={IEDClogo} className="h-28 md:w-30" alt="IEDC Logo" />
            </div>
            <div className="text-white xl:w-[530px] lg:w-[400px]">
              <p className="text-base">
                Kerala Startup Mission | Government of Kerala
              </p>
              <p className="text-sm text-gray-300 pb-5">
                G3B, Thejaswini, Technopark Campus
                <br />
                Kariavattom, Trivandrum, Kerala, 695581
              </p>
              <p className="text-base text-gray-300">For Queries:</p>
              <p className="text-base text-white pb-5">
                iedckerala@startupmission.in
              </p>
              <p className="text-base text-white pt-5 pb-7">
                Bergin Russel
                <br />
                iedckerala@startupmission.in
                <br />
                +91 6238998379
              </p>
              <div className="flex gap-4 text-2xl text-gray-300">
                <a target="_blank" href="https://www.facebook.com/keralastartupmission/">
                  <FaFacebook />
                </a>
                <a target="_blank" href="https://www.instagram.com/keralastartupmission/">
                  <FaInstagram />
                </a>
                <a target="_blank" href="https://www.twitter.com/startup_mission">
                  <FaTwitter />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/kerala-startup-mission/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          {/* Second Grid Item */}
          <div className="flex md:w-1/2 p-5 flex-col items-center">
            <div className="flex w-full justify-evenly items-center">
              <img src={cetLogo} className="h-24 w-28" alt="CET Logo" />
              <img
                src={IEDCcetLogo}
                className="h-24 w-30"
                alt="IEDC CET Logo"
              />
            </div>
            <div className="text-white mt-4">
              <p className="text-base">
                Innovation and Entrepreneurship Development Centre | CET
              </p>
              <p className="text-sm text-gray-300 pb-5">
                College of Engineering Trivandrum,
                <br /> Sreekaryam, Thiruvananathapuram, Kerala, 695016
              </p>
              <p className="text-base text-gray-300">For Queries:</p>
              <p className="text-base text-white pb-5">iedcsummit@cet.ac.in</p>
              <p className="text-base text-white pt-5 pb-7">
                IEDC CET
                <br />
                iedc@cet.ac.in
                <br />
                +91 9995620503
              </p>
              <div className="flex gap-4 text-2xl text-gray-300">
                <a target="_blank" href="https://www.facebook.com/iedccet/">
                  <FaFacebook />
                </a>
                <a target="_blank" href="https://www.instagram.com/iedc_cet/">
                  <FaInstagram />
                </a>
                <a target="_blank" href="https://www.twitter.com/CetIedc">
                  <FaTwitter />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-cet/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-12">
          <p className="text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Kerala Startup Mission. All Rights
            Reserved.
          </p>
          <Team />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
