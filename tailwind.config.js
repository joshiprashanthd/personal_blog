module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['IBM Plex Serif', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Inter', 'sans-serif'],
				mono: ['monospace']
			}
		}
	},
	plugins: []
}
