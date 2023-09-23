import React, { useState } from 'react';

const FAQ = ({faqData}, { sectionRef }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div  ref={ sectionRef } className="mb-4 space-y-3 md:w-2/3 w-3/4 self-center">
        <h2 className="text-center block mb-12 text-4xl font-bold">FAQs</h2>
          {faqData.map((faq, index) => (
            <div key={index} className="p-2 bg-[#64748B] text-white rounded-md shadow-md ">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <button
                    className="text-left w-full focus:outline-none"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <span className="font-bold">{faq.question}</span>
                  </button>
                </div>
                <div>
                  <button
                    className=""
                    onClick={() => handleQuestionClick(index)}
                  >
                    {expandedQuestion === index ? <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13.3477H21" stroke="#9BA9B3" strokeWidth="5.14286" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        : <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3.34766V23.3477M3 13.3477H23" stroke="#9BA9B3" strokeWidth="5.14286" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>}
                  </button>
                </div>
              </div>
              {expandedQuestion === index && (
                <div className="py-3">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default FAQ;
