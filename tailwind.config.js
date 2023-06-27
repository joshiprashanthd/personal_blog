/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					md: '686px'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
