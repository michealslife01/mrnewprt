/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    darkMode: 'class',
    theme: {
      extend: {
        gridTemplateColumns: {
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
        },
        fontFamily: {
          Outfit: ['Outfit', 'sans-serif'],
          Ovo: ['Ovo', 'sans-serif'],
        },
        animation:{
          spin_slow:'spin 6s linear infinite',
        },
        colors: {
          lightHover: '#F7F7F7',
          darkHover: '#0a1837',
          darkTheme: '#0b1226',
        },
        boxShadow: {
          'black': '4px 4px 0 #000',
          'white': '4px 4px 0 #fff',
        },
      }
    },
   
  }
  