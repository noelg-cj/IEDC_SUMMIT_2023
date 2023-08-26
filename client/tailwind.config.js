/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "darker-grotesque": ["Darker Grotesque", "sans"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      keyframes: {
        "grow-circle": {
          "0%": {
            "border-radius": "50%",
            transform: "scale(0,0) translate(0, 80%)",
            opacity: 0,
          },
          "100%": {
            "border-radius": "50%",
            transform: "scale(1,1) translate(0, 0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "grow-circle": "grow-circle 400ms forwards",
        // "animate-revolve": "revolve 4s linear infinite",
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
