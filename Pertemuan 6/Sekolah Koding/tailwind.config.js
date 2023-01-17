// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],

  darkMode: false, // or 'media' or 'class'
    theme: { 
      
    extend: {
      colors: {
        // Configure your color palette here
        dlcolor :{
        DEFAULT : '#3B82F6',
        dark: '#1E3A8A'
      },
    },
   },
   variants: {},
   plugins: [],
  }
}