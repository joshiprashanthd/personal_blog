import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
