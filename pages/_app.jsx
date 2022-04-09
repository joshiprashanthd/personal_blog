import '../styles/globals.css'
import { Layout } from '../components'
import NextNProgress from 'nextjs-progressbar'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import config from '../theme'

const theme = extendTheme(config)

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress
				color="#3b82f6"
				options={{
					showSpinner: false,
					easing: 'ease',
					speed: 500,
					minimum: 0.1,
					trickle: true,
					trickleSpeed: 200
				}}
			/>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	)
}

export default MyApp
