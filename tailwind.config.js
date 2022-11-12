/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes:[
      {
        doctortheme: {
          primary: "#0fcfec",
          secondary: "#19d3ae",
          accent: "#3a4256",
          neutral: "#1D283A",
          "base-100": "#0F1729",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
