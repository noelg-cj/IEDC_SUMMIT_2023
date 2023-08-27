import React, { useState } from 'react';
import TVC from "../assets/img/directions/TVC new.png"
import Kochuveli from "../assets/img/directions/Kochuveli new.png"
import Petta from "../assets/img/directions/Petta new.png"
const App = () => {
  const [activeLink, setActiveLink] = useState('TVC');
  const [content, setContent] = useState('TVC');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setContent(link);
  };

  return (
    <div className='flex flex-row space-x-3 w-full'>
        <div className='Maps w-full m-auto'>
        <div className="container mx-auto items-center">
                {
                content === 'TVC' && 
                    
                    <img className="h-1/2 w-3/4 m-auto my-3" src={TVC}/>
                    
                }
                {
                content === 'Kochuveli' &&
                    <img className="h-1/2 w-3/4 m-auto my-3" src={Kochuveli}/>
                }
                {
                content === 'Petta' && 
                <img className="h-1/2 w-3/4 m-auto my-3" src={Petta}/>
                }
            </div>
        </div>
        <div className='flex flex-col w-full'>
            <nav className= "ml-3">
                <div className="container mx-auto ml-0 flex border- justify-between items-center">
                
                    <div className="space-x-4 items-center text-4xl  border-b-2 border-[#858585]  font-darker-grotesque font-semibold ">
                        <button onClick={() => handleLinkClick('TVC')} className={`nav-link ${activeLink === 'TVC' ? 'text-[#09189C]' : 'text-[#858585]'}`}>TVC</button>
                        <button onClick={() => handleLinkClick('Kochuveli')} className={`nav-link ${activeLink === 'Kochuveli' ? 'text-[#09189C]' : 'text-[#858585]'}`}>Kochuveli</button>
                        <button onClick={() => handleLinkClick('Petta')} className={`nav-link ${activeLink === 'Petta' ? 'text-[#09189C]' : 'text-[#858585]'}`}>Petta</button>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto pl-3">
                {
                content === 'TVC' && 
                    <div>
                        <div className='font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque'>
                        Trivandrum Central to CET
                        </div>
                        <h2 className='mt-11 text-2xl font-semibold text-[#000000]'>Via Bus</h2>
                        <p className='font-semibold pr-12 text-xl text-[#605D5D]'>Trivandrum Central Railway Station - Trivandrum Bus Stand (Board Chavadimukku bus) - Kakkanad - Chavadimukku Junction Stop (Final Stop) - CET</p>
                    </div>
                }
                {
                content === 'Kochuveli' &&
                    <div>
                        <div className='font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque'>
                        Kochuveli to CET
                        </div>
                        <h2 className='mt-11 text-2xl font-semibold text-[#000000]'>Via Bus</h2>
                        <p className='font-semibold pr-12 text-xl text-[#605D5D]'>Kochuveli Railway Station - Anayara bus stop (Board Chavadimukku bus) - Kakkanad - Chavadimukku Junction Stop (Final Stop) - CET</p>
                    </div>
                }
                {
                content === 'Petta' && 
                    <div>
                        <div className='font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque'>
                        Petta to CET
                        </div>
                        <h2 className='mt-11 text-2xl font-semibold text-[#000000]'>Via Bus</h2>
                        <p className='font-semibold pr-12 text-xl text-[#605D5D]'>Pettah Railway Station - Pettah bus stop (Board Chavadimukku bus) - Kakkanad - Chavadimukku Junction Stop (Final Stop) - CET</p>
                    </div>
                }
            </div>
        </div>
    </div>
    
  );
};

export default App;
