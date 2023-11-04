/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ff3811",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
