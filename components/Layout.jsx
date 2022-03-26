import React from 'react'
import { Header, Footer } from '.'
import { Container, Box, useColorModeValue, Divider } from '@chakra-ui/react'

const Layout = ({ children }) => {
	const bgColor = useColorModeValue('gray.100', 'gray.800')
	const borderBottomColor = useColorModeValue('gray.200', 'gray.700')

	return (
		<Container
			maxWidth="full"
			backgroundColor={bgColor}
			transitionProperty="all"
			transitionDuration="300ms"
		>
			<Container maxWidth="container.md">
				<Header />
				<Box paddingBottom="16">{children}</Box>
				<Divider />
				<Footer />
			</Container>
		</Container>
	)
}
export default Layout
