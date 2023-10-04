import React, { useState } from "react";

function FAQ({ faqData }, { sectionRef }) {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="sm:w-2/3 w-11/12 self-center flex flex-col relative  mb-20"
    >
      <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[700px] lg:h-[700px] bg-transparent border-[#3866F2] border-[70px] md:border-[100px] lg:border-[140px] right-[-320px] sm:right-[-350px] md:right-[-550px] lg:right-[-600px] top-[100px] sm:top-0 lg:top-[-150px] opacity-40 absolute rounded-full -z-20" />
      <div className="absolute overflow-hidden -z-6 opacity-5 text-[#0597F2] xl:top-[-110px] lg:top-[-110px] md:top-[-75px] sm:top-[-70px]  w-full space-y-6 text-center self-center">
        <h1 className="xl:text-[200px] lg:text-[200px] md:text-[150px] sm:text-[150px] text-[0px] whitespace-nowrap font-bold">
          FAQ
        </h1>
      </div>
      <h1 className="font-bold md:font-[500] text-[#0597F2] text-center text-[0px] xl:text-[70px] lg:text-[60px] ">
        Frequently Asked Questions
      </h1>
      <h1 className="font-bold mb-10 md:font-[500] text-[#0597F2] text-center text-[60px] lg:text-[0px] md:text-[65px] sm:text-[60px] ">
        FAQs
      </h1>
      <div className="space-y-5 mt-8 z-1">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="p-2 w-full text-white rounded-md shadow-lg border-[2px] border-blue-300 bg-zinc-50"
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <button
                  className="text-left w-full focus:outline-none"
                  onClick={() => handleQuestionClick(index)}
                >
                  <span className="sm:font-semibold text-[#3866F2]">
                    {faq.question}
                  </span>
                </button>
              </div>
              <div>
                <button className="" onClick={() => handleQuestionClick(index)}>
                  {expandedQuestion === index ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13.3477H21"
                        stroke="#0597F1"
                        strokeWidth="5.14286"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 3.34766V23.3477M3 13.3477H23"
                        stroke="#0597F1"
                        strokeWidth="5.14286"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {expandedQuestion === index && (
              <div className="py-3 font-[10px] text-[#64748B]">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
