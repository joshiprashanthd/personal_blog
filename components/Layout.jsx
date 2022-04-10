import React from 'react'
import { Header, Footer } from '.'
import { Container, Box, useColorModeValue, Divider } from '@chakra-ui/react'

const Layout = ({ children }) => {
	const bgColor = useColorModeValue('gray.100', 'gray.800')

	return (
		<Container
			maxWidth="full"
			minHeight="100vh"
			backgroundColor={bgColor}
			transitionProperty="background-color"
			transitionDuration="200ms"
		>
			<Container maxWidth="container.md">
				<Header />
				<Box pb={8}>{children}</Box>
				<Divider />
				<Footer />
			</Container>
		</Container>
	)
}
export default Layout
