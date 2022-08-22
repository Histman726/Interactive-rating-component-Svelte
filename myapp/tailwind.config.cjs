/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",],
  theme: {
    extend: {
      maxWidth:{
        xsm:'440px'
      },
      borderRadius:{
        '4xl':'border-radius: 60px;'
      }
    },
  },
  plugins: [],
}
