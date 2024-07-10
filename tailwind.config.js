/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "times-new-roman": "'Times New Roman'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "109xl": "128px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
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
