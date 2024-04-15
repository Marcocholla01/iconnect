/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#6B46C1", // Background color
          dark: "#553C9A", // Dark mode background color
          700: "#6B46C1", // Default text color
          800: "#553C9A", // Hover text color
          300: "#AC92EC", // Focus ring color
          900: "#433E62", // Dark mode focus ring color
        },
      },
    },
  },
  plugins: [],
};
