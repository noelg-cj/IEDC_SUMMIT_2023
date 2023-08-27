import React from "react";
import PreSumCard from "../components/prevSumCard";
import VideoCard from "../components/videoCard";
function prevSummut()
{
    return(
        <div className=' font-darker-grotesque w-10/12 xs:w-11/12 py-10 space-y-10 min-h-[80vh]  flex flex-col '>
            <h className="font-[500] text-[60px]">Explore Our Previous Summits</h>
            
            <div className="lg:w-1/2  space-y-5 w-full">
                <PreSumCard/>
                <PreSumCard/>
                <PreSumCard/>
                <PreSumCard/>
                
            </div>
            <div className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-3  ">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                
            </div>
            <div className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-3  ">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                
            </div>
        </div>
    );
}
export default prevSummut;
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19.5" cy="16.5" r="0.5" fill="black" fill-opacity="0.28"/>
<path d="M11 5L23 17L11 29" stroke="#09189C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
