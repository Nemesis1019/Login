/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        color_button: '#0fdfcc',
        color_button_hover:'#10ccbb',
        color_label:'#1e84ea',
        color_title:'#33edd1',
        color_bg:'#4981f7',
        color_bg_section:'#2f2659'
      },
    },
  },
  plugins: [],
}
