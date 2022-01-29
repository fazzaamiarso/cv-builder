module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#502ACD',
        'secondary-gray': '#E5E5E5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
