/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
    "./public/index.html",
    "./utils/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0E10",
        
        mainText: "#FFFFFF",        
        secondaryText: "#A0A0A0", 
        
        primary: "#2A3A5A",      
        secondary: "#3A4B6D",  
      }
    },
  },
  plugins: [],
}