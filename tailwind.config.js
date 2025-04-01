/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",  // Dark Black
        box: "#1E1E1E",         // Dark Gray
        input: "#2A2A2A",       // Deep Gray
        border: "#FFC107",      // Golden Yellow
        button: "#FFD700",      // Bright Yellow
        buttonHover: "#FFA000", // Amber
        text: "#B0BEC5",        // Muted Grayish Blue
        highlight: "#FFD700",   // Gold
      },
    },
  },
  plugins: [],
}
