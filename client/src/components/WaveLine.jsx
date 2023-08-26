import React from "react";

function WaveLine({ position, direction }) {
  return (
    <div className={`absolute ${position}`}>
      {direction && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="230"
          height="43"
          viewBox="0 0 230 43"
          fill="none"
        >
          <path
            d="M1 21.8609C53 -3.65807 105 -3.65807 157 21.8609C209 47.3799 261 47.3799 313 21.8609"
            stroke="white"
            strokeWidth={4}
            strokeOpacity={0.4}
          />
        </svg>
      )}
      {!direction && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="237"
          height="43"
          viewBox="0 0 237 43"
          fill="none"
        >
          <path
            d="M236 21.1393C184 46.6583 132 46.6583 80 21.1393C28 -4.37966 -24 -4.37966 -76 21.1393"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="4"
          />
        </svg>
      )}
    </div>
  );
}

export default WaveLine;
