/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#20201e",
          "300": "#16161e",
          "400": "#131313",
          "500": "#02020a",
          "600": "#010000",
        },
        darkslategray: "#31313b",
        blue: "#2614f4",
        blueviolet: "#5947ff",
        "color-white-solid": "#fff",
        gainsboro: "#dadada",
        goldenrod: "rgba(247, 186, 81, 0.5)",
        black: "#030303",
        lightgray: {
          "100": "#d4d4d4",
          "200": "#d2cdcd",
          "300": "rgba(212, 212, 212, 0.3)",
          "400": "rgba(212, 212, 212, 0.5)",
        },
        "color-violet-7": "#10061e",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        jost: "Jost",
        "helvetica-neue": "'Helvetica Neue'",
        kanit: "Kanit",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "5xl": "24px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
