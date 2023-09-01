/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens : {
        'custom1' : '1163px',
        'custom2' : '1100px',
        'custom3' : '350px',
      },
      fontFamily: {
        "darker-grotesque": ["Darker Grotesque", "sans"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      keyframes: {
        "grow-circle": {
          from: {
            transform: "scale(0,0) translate(0, 80%)",
            opacity: 0,
          },
          to: {
            transform: "scale(1,1) translate(0, 0)",
            opacity: 1,
          },
        },
        "shrink-circle": {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(0.95)",
          },
        },

        "spin-opposite": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        // "move-text": {
        //   from: {
        //     transform: "translateY(0)",
        //     "font-size": "384px",
        //     color: "gray",
        //   },
        //   to: {
        //     transform: "translateY(-50%)",
        //     "font-size": "48px",
        //     color: "white",
        //   },
        // },

        // "move-text-return": {
        //   from: {
        //     transform: "translateY(-50%)",
        //     "font-size": "48px",
        //     color: "white",
        //   },
        //   to: {
        //     transform: "translateY(0)",
        //     "font-size": "384px",
        //     color: "gray",
        //   },
        // },

        // "move-speakers": {
        //   from: {
        //     display: "none",
        //     transform: "translateY(0%)",
        //     opacity: 0,
        //     scale: 1.3,
        //   },
        //   to: {
        //     display: "block",
        //     transform: "translateY(-5%)",
        //     opacity: 1,
        //     scale: 1,
        //   },
        // },
        // "move-speakers-return": {
        //   from: {
        //     display: "block",
        //     transform: "translateY(-5%)",
        //     opacity: 1,
        //     scale: 1,
        //   },
        //   to: {
        //     display: "none",
        //     transform: "translateY(0%)",
        //     opacity: 0,
        //     scale: 1.3,
        //   },
        // },
        // "move-left": {
        //   from: {
        //     transform: "translateX(0)",
        //   },
        //   to: {
        //     transform: "translateX(5%),",
        //   },
        // },
        // "move-right": {
        //   from: {
        //     transform: "translateX(0)",
        //   },
        //   to: {
        //     transform: "translateX(-5%)",
        //   },
        // },
        // "move-left-return": {
        //   from: {
        //     transform: "translateX(5%),",
        //   },
        //   to: {
        //     transform: "translateX(0)",
        //   },
        // },
        // "move-right-return": {
        //   from: {
        //     transform: "translateX(-5%)",
        //   },
        //   to: {
        //     transform: "translateX(0)",
        //   },
        // },
      },
      animation: {
        "grow-circle": "grow-circle 400ms forwards",
        "shrink-circle": "shrink-circle 400ms forwards",
        "spin-slow": "spin 90s linear infinite",
        "spin-opposite": "spin-opposite 90s linear infinite",
        // "move-text": "move-text 1s linear forwards",
        // "move-text-return": "move-text-return 1s linear forwards",
        // "move-left": "move-left 1s linear forwards",
        // "move-right": "move-right 1s linear forwards",
        // "move-left-return": "move-left-return 1s linear forwards",
        // "move-right-return": "move-right-return 1s linear forwards",
        // "move-speakers": "move-speakers 1s forwards",
        // "move-speakers-return": "move-speakers-return 1s forwards",
      },
      colors: {
        "theme-blue": "#0F86E1",
        "theme-blue2": "#4656E180",
        "theme-blue3": "#097ED8",
      },
    },
  },
  plugins: [],
};
