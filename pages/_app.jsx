import '../styles/globals.css'
import { Layout } from '../components'
import { ApolloProvider } from '@apollo/client'
import NextNProgress from 'nextjs-progressbar'
import client from '../services/apollo_client'
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
				<ApolloProvider client={client}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ApolloProvider>
			</ChakraProvider>
		</>
	)
}

export default MyApp
