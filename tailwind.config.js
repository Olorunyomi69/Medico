/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('/logo.jpg')",
        'doctors': "url('/doctor-image.jpg')",
        'cta': "url('/cta-image.jpg')",
        'about': "url('/about.jpg')",
      }
    },
  },
  plugins: [],
}