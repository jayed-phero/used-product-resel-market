/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-yellow': '#d8b65d',
      },
    }
  },
  plugins: [require("daisyui")],
}
