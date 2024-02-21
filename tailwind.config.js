module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: "#b3b3b3",
        "gray-100": "#626262",
        "gray-200": "#aeadb3",
        "gray-300": "#e7e7e7",
        blue: "#051d59",
        "blue-100": "#cccedb",
        orange: "#fa9d26",
        green: "#32aa53",
      },
      gridTemplateColumns: {
        contained: "minmax(auto, 1111px)",
        "form-wrapper": "minmax(auto, 920px)",
        "custom-column": "500px 1fr",
        "custom-column-icon": "50px 1fr",
        "custom-column-dropdown": "150px 1fr",
      },
      fontFamily: {
        "raleway-thin": ['"Raleway Thin"', "sans-serif"],
        "raleway-extralight": ['"Raleway ExtraLight"', "sans-serif"],
        "raleway-light": ['"Raleway Light"', "sans-serif"],
        "raleway-regular": ['"Raleway Regular"', "sans-serif"],
        "raleway-medium": ['"Raleway Medium"', "sans-serif"],
        "raleway-semibold": ['"Raleway SemiBold"', "sans-serif"],
        "raleway-bold": ['"Raleway Bold"', "sans-serif"],
        "raleway-extrabold": ['"Raleway ExtraBold"', "sans-serif"],
        "raleway-black": ['"Raleway Black"', "sans-serif"],
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
