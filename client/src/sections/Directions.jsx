import React, { useState } from "react";

const App = ({ sectionRef }) => {
  const [activeLink, setActiveLink] = useState('TVC');

  const links = [
    { id: 'TVC', text: 'TVC' },
    { id: 'Kochuveli', text: 'Kochuveli' },
    { id: 'Petta', text: 'Petta' },
    // Add more links here as needed
  ];

  const contentData = [
    {
      id: 'TVC',
      title: 'Trivandrum Central to CET',
      via: 'Via Bus',
      description:
        'Trivandrum Central Railway Station - Trivandrum Bus Stand (Board Chavadimukku bus) - Chavadimukku Junction Stop (Final Stop) - CET',
    },
    {
      id: 'Kochuveli',
      title: 'Kochuveli to CET',
      via: 'Via Bus',
      description:
        'Kochuveli Railway Station - Anayara bus stop (Board Chavadimukku bus) - Chavadimukku Junction Stop (Final Stop) - CET',
    },
    {
      id: 'Petta',
      title: 'Petta to CET',
      via: 'Via Bus',
      description:
        'Pettah Railway Station - Pettah bus stop (Board Chavadimukku bus) - Chavadimukku Junction Stop (Final Stop) - CET',
    },
    // Add more content data here as needed
  ];
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div ref={sectionRef} className=" w-10/12 my-20">
      <h1 className="font-medium md:font-[500] font-darker-grotesque text-5xl md:text-[60px]">Get Directions to the event</h1>
      <div className="flex flex-col mt-20 space-x-3 w-full space-y-10 custom2:flex-row">
        <div className="Maps w-full m-auto flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15782.081640228585!2d76.9063407!3d8.5458513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1693841860889!5m2!1sen!2sin" 
          width="600" 
          height="450"
           
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg 2 shadow-lg">
        </iframe>
          {/* <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript> */}
        </div>
        <div className="flex flex-col p-0 w-full overflow-x-auto custom2:p-12">
      <nav>
        <div className="border-b-2 container mx-auto ml-0 flex">
          <div className="w-full  items-start space-x-4 md:space-x-0 text-4xl flex flex-wrap flex-row  font-darker-grotesque font-semibold custom1:flex-row custom2:flex-col custom2:items-center custom1:items-start">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`nav-link md:w-1/3   ml-0 custom2:ml-4 custom1:ml-0 ${
                  activeLink === link.id
                    ? 'text-[#3866F2] border-b-2 border-[#3866F2]'
                    : 'text-[#858585]'
                }`}
              >
                {link.text}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        {contentData.map((content) => (
          <div key={content.id} style={{ display: content.id === activeLink ? 'block' : 'none' }}>
            <div className="font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque">{content.title}</div>
            <h2 className="mt-11 text-2xl font-semibold text-[#000000] font-darker-grotesque">{content.via}</h2>
            <p className="font-semibold pr-12 text-xl text-[#605D5D] font-darker-grotesque">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default App;
