/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat' : ["'Montserrat'", 'sans-serif']
    },
    extend: {
      colors : {
        "custom-white" : "#f0f0f0",
        "custom-gray" : "#dee2e6",
        "custom-blue" : "#646FD4",
        "primary-blue" : "#00697c",
        "secondary-blue" : "#1a9597",
        "light-blue" : "#f5f4fd", 
        "white-bg" : "#fefbfa",
      },
      backgroundImage : {
        'logo' : "url('assets/img/logo.png')",
        'house-portrait' : "url('https://studiorenderdesign.com/images/slider-image1.jpg')",
        'house-card' : "url('https://vestaequity.tryprism.com/property-media/image/2022/09/01/3458948917512239235/1c1fbfb3ef5c4df1be18fc1649e49506.png?quality=100&w=468')",
        'house-search-bg' : "url('https://vestaequity-web.s3.amazonaws.com/static/media/marketplace-background.058f87ef.jpg')",
      },
    },
  },
  plugins: [],
}
