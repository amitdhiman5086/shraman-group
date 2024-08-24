/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6675F7",
        secondary: "#57007B",
        productTop: "#DE4396",
        productBottom: "#0D1C9F",
        button: "#3D63EA",
        logoBackground: "#D9D9D9",
        lineRight: "#F76680",
        lineLeft: "#57007B",
      },

      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        appear: "appear 5s view() linear",
        popin: "popin 1s ease-out",
      },
      // animation-timeline :{
      //   "timeline " : "view()",
      // },
      keyframes: {
        "loop-scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        appear: {
          from: {
            opacity: "0",
            scale: "0.5",
          },
          to: {
            opacity: "1",
            scale: "1",
          },
        },
        popin: {
          "0%": { opacity: "0", transform: "scale(0.75)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
