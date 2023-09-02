import React from "react";
function videoCard({ videoID }) {
  return (
    <div className="w-full sm:[w-250px] xl:w-[350px] h-[250px] bg-gray-300 rounded-[20px] flex flex-col justify-center items-center">
      <iframe
        style={{ borderRadius: "20px" }}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default videoCard;
