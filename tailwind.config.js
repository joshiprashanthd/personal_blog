const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: colors.black,
				foreground: colors.white,
				'primary-dark': colors.blue[500],
				'primary-light': colors.blue[700]
			},
			fontFamily: {
				ui: ['var(--font-outfit)'],
				sans: ['var(--font-work-sans)'],
				mono: ['var(--font-noto-sans-mono)'],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '0'
				},
				screens: {
					md: '686px'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
