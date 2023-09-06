import React from "react";
import { useState } from "react";
import ModalBox from "../components/TeamModalbox";



function TeamCall(props) {
  
  return (
    <div className="relative space-y-10 font-dm-sans  w-11/12 flex flex-col mb-20">
      <div  onClick={() => props.toggler()} className="w-11/12 space-y-6 text-center self-center">
        <button className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
        Meet the Team
        </button>
      </div>
    </div>
  );
}

export default function Team() {

  function useToggle() {
    const [on, setOn] = useState(false);
  
    const toggler = () => {
      setOn((on) => !on);
    };
  
    return { on, toggler };
  }

  const { on, toggler } = useToggle();

  return (
    <>
  <TeamCall toggler={toggler} />
  {on && <ModalBox toggler={toggler} />}
  </>
  );
}

