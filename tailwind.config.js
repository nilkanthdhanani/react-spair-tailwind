module.exports = {
  content: [
    './src/modules/home/index.js',
    './src/common/footer/index.js',
    './src/common/header/index.js',
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
        'green': '#00FF00',
      },
      fontFamily: {
        inline: ['BigShouldersInline'], // from download
        // inline: ['Big Shoulders Inline Text'], // from link
      },
    },
  },
  plugins: [],
}
