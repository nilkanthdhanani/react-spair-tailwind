module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '576px' },
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1024px' },
      },
      container: {
        center: true,
        padding: '40px',
        screens: {
          lg: '1240px',
        },
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'red': '#f00',
      },
      fontFamily: {
        inline: ['BigShouldersInline'], // from download
        // inline: ['Big Shoulders Inline Text'], // from link
      },
    },
  },
  plugins: [],
}
