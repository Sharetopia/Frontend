module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter-Regular", "Roboto", "Arial"],

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
