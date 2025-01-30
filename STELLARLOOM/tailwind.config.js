/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white-solid": "#fff",
        "stellar-primary": "#f8d80e",
        "aether-primary": "#01002a",
        darkslateblue: "#33335e",
        dimgray: {
          "100": "#777373",
          "200": "#787070",
          "300": '#787171'
        },
        black: "#000",
        goldenrod: "#c4a600",
        "aether-secondary": "#ffae01",
        "color-violet-7": "#10061e",
        mustard: "#D3940F",
        slate: {
          "100": "#F1F5F9",
          "500": "#64748B",
          "600": "#475569"
        },
        darkgreyblue: "#313d52",
        grey: "#696969",
        indigo: "#5661f6",
        lightgrey: "#e6e6e6",
        darkbluegreen: "#141718",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        jost: "Jost",
        kanit: "Kanit",
        "instrument-sans": "'Instrument Sans'",
        ibm: 'IBM Plex Mono'
      },
      borderRadius: {
        "41xl": "60px",
        "21xl": "40px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
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
