/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class", // enable this to follow the app its own mode not the system
  theme: {
    extend: {
      colors: {
        // black: "#999900",
      },
    },
  },
  plugins: [],
};
