import React from "react";
function preSumCard() {
  return (
    <div>
      <div className="flex ">
        <h1 className="self-center text-[#09189C] font-[600] text-[45px]">
          IEDC Summit 2023
        </h1>
        <svg
          className="self-center"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.5" cy="16.5" r="0.5" fill="black" fillOpacity="0.28" />
          <path
            d="M11 5L23 17L11 29"
            stroke="#09189C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="flex space-x-2">
        <svg
          className="self-center"
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10.2931C21 15.4256 11 24.2328 11 24.2328C11 24.2328 1 15.4256 1 10.2931C1 5.16066 5.47715 1 11 1C16.5229 1 21 5.16066 21 10.2931Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M11 11.4554C11.6904 11.4554 12.25 10.9352 12.25 10.2934C12.25 9.6517 11.6904 9.13147 11 9.13147C10.3096 9.13147 9.75 9.6517 9.75 10.2934C9.75 10.9352 10.3096 11.4554 11 11.4554Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-[400] text-[30px]">
          Sahradya College of Engineering
        </p>
      </span>
      <span className="flex space-x-2">
        <svg
          className="self-center"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3333 3.10664V1.0415M14.3333 3.10664V5.17177M14.3333 3.10664H9.33333M1 9.30204V18.5952C1 19.7357 1.99492 20.6603 3.22222 20.6603H18.7778C20.0051 20.6603 21 19.7357 21 18.5952V9.30204H1Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 9.30209V5.17182C1 4.03128 1.99492 3.10669 3.22222 3.10669H5.44444"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.44434 1.0415V5.17177"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0004 9.30209V5.17182C21.0004 4.03128 20.0055 3.10669 18.7782 3.10669H18.2227"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="font-[400] text-[30px]">19 October 2019</p>
      </span>
    </div>
  );
}
export default preSumCard;
