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
        'footer-pattern': "url('../src/assets/images/footer-image.jpg')",
        'destination-banner': "url('../src/assets/images/destination-banner.jpg')",
        'experiences-banner': "url('../src/assets/images/experiences-banner.jpeg')",
        'plan': "url('../src/assets/images/planyourtrip.avif')",
        'contactus': "url('../src/assets/images/contactus.jpg')",
      }
    },
  },
  plugins: [],
}

