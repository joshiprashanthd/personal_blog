/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-work-sans)"],
				mono: ["var(--font-noto-sans-mono)"],
			},
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
