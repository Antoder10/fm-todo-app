module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['header-desktop-dark', 'header-mobile-dark']
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    minWidth: {
      '2/3': '66%',
     },
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Dark-Theme
        'very-dark-blue': 'hsl(230,17%,14%)',
        'very-dark-blue-top': 'hsl(232,19%,15%)',
        'dark-desaturated-blue': 'hsl(228,28%,20%)',
        'desaturated-blue': 'hsl(228,41%,34%)',
        // Light-Theme
        'very-pale-blue': 'hsl(225,100%,98%)',
        'light-grayish-blue': 'hsl(232,6%,94%)',
        'dark-grayish-blue': 'hsl(237,16%,47%)',
        'very-dark-blue': 'hsl(230,17%,14%)',
      },
      backgroundImage: theme => ({
        'header-desktop-light': "url('/src/images/bg-desktop-light.jpg')",
        'header-desktop-dark': "url('/src/images/bg-desktop-dark.jpg')",
        'header-mobile-light': "url('/src/images/bg-mobile-light.jpg')",
        'header-mobile-dark': "url('/src/images/bg-mobile-dark.jpg')"
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
