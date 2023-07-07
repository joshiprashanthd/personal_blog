const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: colors.black,
				foreground: colors.white,
				primary: colors.purple[500]
			},
			fontFamily: {
				sans: ['var(--font-work-sans)'],
				mono: ['var(--font-noto-sans-mono)'],
				serif: ['var(--font-prata-serif)']
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
