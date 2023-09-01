import React from "react";
function comingSoon(props)
{
    return(
        <div className="flex flex-col h-[500px] justify-center  w-10/12  text-center "> 
            <h className="text-7xl font-extrabold  bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text">{props.title}</h>
            <h className="text-4xl font-medium  bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text">Announcing Soon</h>

        </div>
    );
}
export default comingSoon;
