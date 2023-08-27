import IedcSubCircle from "./IedcSubCircle";
import summitIcon from "../assets/img/summitIcon.svg";
import { iedcCircle } from "../data";

const IedcCircle = () => {
  return (
    <div className="overflow-hidden">
      <div className={`relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] flex items-center justify-center`}>
        <img src={summitIcon} className="w-44 sm:w-60 md:w-80 lg:w-96 round-full" />
        <div className="absolute w-full h-full flex items-center animate-spin-slow">
            {iedcCircle.map((sub, index) => (
              <div className={`absolute left-0 origin-[160px] sm:origin-[250px] md:origin-[300px] lg:origin-[400px]`} style={{
                transform: `rotate(calc(360/6 * ${index}deg))`,
              }}>
                <div className="animate-spin-opposite">
                  <div style={{
                    transform: `rotate(calc(-360/6*${index}deg))`
                  }}>
                    <IedcSubCircle datas={sub} key={sub.title + index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default IedcCircle;
