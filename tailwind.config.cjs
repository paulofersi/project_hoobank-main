/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        corPrimaria: "#FFF2F9",
        corSecundaria: "#ECC1C8",
        corTerciaria: "#AF3C57",
        dimBlue: "#AF3C57",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

//cores
//FFF2F9
//ECC1C8
//AF3C57
