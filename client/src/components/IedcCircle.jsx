import IedcSubCircle from "./IedcSubCircle";
import summitIcon from "../assets/img/summitIcon.svg";
import { iedcCircle } from "../data";

const IedcCircle = () => {
  return (
    <div>
      <img src={summitIcon} className="w-48 sm:w-72 lg:w-96 round-full" />
      {iedcCircle.map((sub, index) => (
        <IedcSubCircle datas={sub} key={sub.title + index} />
      ))}
    </div>
  );
};

export default IedcCircle;
