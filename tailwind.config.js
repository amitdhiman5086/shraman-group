/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#7C3AED",
        productTop: "#EC4899",
        productBottom: "#3B82F6",
        button: "#6366F1",
        logoBackground: "#E5E7EB",
        lineRight: "#F472B6",
        lineLeft: "#8B5CF6",
      },

      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        appear: "appear 5s view() linear",
        popin: "popin 2s ease-out ",
        popinRight: "popinRight 2s ease-out ",
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
          "0%": { opacity: "0", transform: "translateX(20%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        popinRight: {
          "0%": { opacity: "0", transform: "translateX(-20%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
