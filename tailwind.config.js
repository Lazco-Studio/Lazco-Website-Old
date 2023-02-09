/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#55dba1",
          secondary: "#f796a8",
          accent: "#7cf4b2",
          neutral: "#1F2133",
          "base-100": "#3F455A",
          info: "#4DD0F5",
          success: "#1C7D5D",
          warning: "#F1CD5F",
          error: "#EE777F",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
