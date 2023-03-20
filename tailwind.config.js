/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Playfair Display'],
				sans: ['Work Sans'],
				mono: ['Jetbrains Mono']
			}
		}
	},
	plugins: []
}
