/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e1e",
          "200": "#1d1d1f",
          "300": "#1a1a1c",
          "400": "#131314",
          "500": "#121212",
          "600": "#020203",
          "700": "rgba(0, 0, 0, 0)",
          "800": "rgba(255, 255, 255, 0.6)",
          "900": "rgba(255, 255, 255, 0.8)",
          "1000": "rgba(255, 255, 255, 0.4)",
          "1100": "rgba(255, 255, 255, 0.3)",
          "1200": "rgba(255, 255, 255, 0.5)",
        },
        coral: {
          "100": "#ee7c47",
          "200": "#ea6f37",
        },
        "color-white-solid": "#fff",
        chocolate: "#d1571f",
        dimgray: "#777373",
        steelblue: "#575782",
        darkslategray: "#3a3a40",
        crimson: "#ee3a3a",
        "color-violet-7": "#10061e",
        black: '#0A0A0B',
      },
      spacing: {},
      fontFamily: {
        jost: "Jost",
        raleway: "Raleway",
        "ibm-plex-mono": "'IBM Plex Mono'",
        "space-grotesk": "'Space Grotesk'",
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        "13xl": "32px",
        "11xl": "30px",
        "3xs": "10px",
        "140xl": "159px",
        "8xs": "5px",
        "55xl-6": "74.6px",
        "12xs-5": "0.5px",
        "12xs-1": "0.1px",
        "12xs-4": "0.4px",
        "12xs-6": "0.6px",
        "6xs": "7px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      mini: "15px",
      "3xs": "10px",
      xs: "12px",
      "12xs-6": "0.6px",
      "5xs": "8px",
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
