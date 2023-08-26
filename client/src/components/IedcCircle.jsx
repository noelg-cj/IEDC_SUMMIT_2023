import IedcSubCircle from "./IedcSubCircle";
import summitIcon from "../assets/img/summitIcon.svg";

const IedcCircle = () => {
  return (
    <div>
      <img src={summitIcon} className="w-48 sm:w-72 lg:w-96 round-full" />
      <IedcSubCircle />
    </div>
  );
};

export default IedcCircle;
