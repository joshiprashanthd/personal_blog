import React from 'react'
import { Header, Footer } from '.'
import { Container, Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
	return (
		<Container maxWidth="full" backgroundColor="gray.100">
			<Container maxWidth="container.md" paddingX={['1rem', '2rem']}>
				<Header />
				{children}
				<Footer />
			</Container>
		</Container>
	)
}
export default Layout
