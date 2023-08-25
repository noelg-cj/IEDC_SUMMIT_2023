import React from "react";
import Tickets from "../components/Tickets";
function Events()
{return(
    <div className="  space-y-10 font-dm-sans  w-11/12 flex flex-col">
        <div className="w-11/12 space-y-6 text-center self-center">
            <h className=" font-[700] text-[75px] text-[#0065B2]">THE EVENTS</h>
            <p className=" font-[400] text-[24px] text-[#676C70]">IEDC summit is your gateway to an exciting world of curated experiences and gatherings that will leave you inspired and enriched. Join us as we bring together thought leaders, industry experts, and enthusiasts to explore a diverse range of topics through engaging workshops, insightful seminars, and captivating networking sessions. Here are the all the interesting events will be held in the IEDC summit 2023.</p>
        </div>
        <div class="flex flex-row flex-wrap justify-evenly">
            <Tickets/>
            <Tickets/>
            <Tickets/>
            <Tickets/>
            <Tickets/>
            <Tickets/>
    </div>
        
    </div>
    );
}
export default Events;