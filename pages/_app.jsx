import '../styles/globals.css'
import { Layout } from '../components'
import { ApolloProvider } from '@apollo/client'
import NextNProgress from 'nextjs-progressbar'
import client from '../services/apollo_client'

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
			<ApolloProvider client={client}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</>
	)
}

export default MyApp
