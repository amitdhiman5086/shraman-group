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
      },
      keyframes: {
        "loop-scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
