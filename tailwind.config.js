/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      heading:['Florest'],
      primary:['Karla']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/body-image.jpg')",
      }
    },
  },
  plugins: [],
}

