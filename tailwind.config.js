/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    darkMode: 'false',
    
    extend: {
      colors: {
        primary: "#16213E",
        secondary: "#0f3460",
        terceary: "#533483",
        red: "#e94560",
        softwhite: "#f1f1f1",
        white: "#fefefe",
        black: "#111",
        blue: "#60a5fa",
        gray: "#222222",
        zinc: "#18181b",
        slate: "#64748b",

        darkPrimary: "1B262C",
        darkSecondary: "0F4C75",
        darkTerceary: "3282B8",
        darkquarteary: "BBE1FA",
      },
      
    },
  },
  plugins: [],
};
