/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBackground: '#242230',
        accentColor: '#C15C41',
        containerColor: '#8A89987A',
        windowColor: '#B9BDC9',
        unselectedText: '#929292',
      }
    },
    container: {
      center: true,
    },
    fontFamily: {
      'sans': 'Poppins'
    }
  },
  plugins: [],
}

