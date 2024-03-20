/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        wide: { max: "1400px" },
        web: { max: "1280px" },
        tb: { max: "1024px" },
        mb: { max: "640px" },
      },
    },
  },
  plugins: [],
};
