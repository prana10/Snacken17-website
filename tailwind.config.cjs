/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/presentation/**/*.jsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#DEB41E",
        "natural1": "#0B0B0B",
        "natural0": "#FFFFFF",
        "grey": "#8E8E8E",
      },

      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },

      // scren sizes
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
