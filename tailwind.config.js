/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        logoRed: '#CF2D2D',
        stroke: '#B0BABF',
        heading: '#1E2022',
        subtitle: '#989090',

      },
      screens: {
        'sm': '480px', // => @media (max-width: 640px) { ... }
        'md': '768px', // => @media (max-width: 768px) { ... }
        'lg': '1024px', // => @media (max-width: 1024px) { ... }
        'xl': '1280px',// => @media (max-width: 1280px) { ... }
        '2xl': '1536px',// => @media (max-width: 1536px) { ... }
      }
    },
  },
  plugins: [require("daisyui")],
}

