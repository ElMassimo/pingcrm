const environment = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss')('./app/javascript/styles/tailwind.config.js'),
    require('autoprefixer'),
  ],
}

module.exports = environment
