/* eslint-disable react/prop-types */

import { useState } from "react";
import LBmodal from "./LeaderboardSection";
function LBcall(props) {
  return (
    //Modify this button to change Leaderboard button UI
    <button
      onClick={() => props.toggler()}
      className=" text-center text-[15px] self-center font-dm-sans bg-[#0597F2] text-white px-7 py-2 m-4 rounded"
    >
      Leaderboard
    </button>
  );
}

export default function Leaderboard() {
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
      <LBcall toggler={toggler} />
      {on && <LBmodal toggler={toggler} />}
    </>
  );
}
