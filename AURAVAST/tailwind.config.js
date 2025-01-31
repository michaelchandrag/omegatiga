/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white-solid": "#fff",
        "auravast-primary": "#281942",
        "auravast-secondary": "rgba(246, 46, 91, 1)",
        jaffa: "#EA6F37",
        black: "#040202",
        features: "rgba(255, 255, 255, 0.5)",
      },
      spacing: {},
      fontFamily: {
        jost: "Jost",
        urbanist: "Urbanist",
        raleway: "Raleway",
        poppins: "Poppins",
        nunito: "Nunito",
        ibm: "IBM Plex Mono",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
