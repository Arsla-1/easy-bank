/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limegreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayBlue: "hsl(233, 8%, 62%)",
        lightGray: "hsl(220, 16%, 96%)",
        lighterGray: "hsl(0, 0%, 98%)",
      },

      margin: {
        secMargin: "160px",
      },

      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
