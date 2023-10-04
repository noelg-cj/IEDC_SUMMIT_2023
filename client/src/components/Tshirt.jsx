import TshirtVector from "../assets/img/tshirt.png";

function Tshirt(props) {
  return (
    <div className="fixed w-11/12 md:w-[1100px] top-24 md:top-20 self-center bg-black rounded-[20px] z-30">
      <div className="flex justify-end">
        <button
          onClick={props.toggleModal}
          className="border-2 rounded-lg text-lg font-bold text-white px-2 mr-4 mt-4"
        >
          X
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center mt-4 mb-20">
        <div className="fixed w-1/2 md:w-1/4 z-10">
          <img
            src={TshirtVector}
            className="w-full h-full transform scale-x-[-1]"
          />
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="ml-2 text-lg md:text-5xl text-gray-600 italic font-extrabold">
            GRAB YOUR
          </p>
          <hr className="border-2 border-solid w-3/5 border-[#0597F2] float-right mb-1 md:mb-4" />
        </div>
        <div className="overflow-hidden whitespace-nowrap flex flex-col text-2xl md:text-5xl text-white italic font-extrabold w-full bg-gradient-to-r from-[#0597F2] to-[#6F04D9] md:py-4">
          <p className="">
            GRAB <span className="opacity-10">GRAB GRAB GRAB GRAB GRAB GRAB GRAB</span>
          </p>
          <p className="">
            <span className="opacity-10">YOUR YOUR YOUR YOUR YOUR</span> YOUR{" "}
            <span className="opacity-10">YOUR YOUR</span>
          </p>
          <p className="">
            <span className="opacity-10">TEES </span>TEES{" "}
            <span className="opacity-10">
              TEES TEES TEES TEES TEES TEES TEES
            </span>
          </p>
          <p className="">
            <span className="opacity-10">NOW NOW NOW NOW NOW</span>
            <span> NOW</span> <span className="opacity-10">NOW </span>
            <span className="md:opacity-10">NOW </span>
          </p>
        </div>
        <div className="w-full flex justify-between items-start">
          <hr className="border-2 border-solid w-3/5 border-[#0597F2] float-left mt-1 md:mt-4" />
          <p className="text-lg md:text-5xl text-gray-600 italic font-extrabold mr-4">
            TEES NOW
          </p>
        </div>
      </div>
      <div className="relative text-center flex justify-center bottom-8 text-xl md:text-3xl font-bold">
        <div className="text-white bg-white rounded-xl px-3 py-1">
          <a
            className="bg-gradient-to-br from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent"
            href="https://forms.gle/iXavxdwCC1vBns2A7"
            target="_blank"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tshirt;
