import NextLink from 'next/link'
import React from 'react'
import {
	chakra,
	Box,
	Flex,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react'

const Card = chakra(
	({ children, postSlug, ...restProps }) => {
		const backgroundColor = useColorModeValue('gray.300', 'gray.900')
		return (
			<NextLink href={`/blog/post/${postSlug}`}>
				<Box
					bgColor={backgroundColor}
					{...restProps}
					transition="ease-in"
					transitionDuration={500}
					transitionProperty="all"
					_hover={{
						bgGradient: 'linear(to-r, blue.600, pink.600)',
						translateY: -2
					}}
				>
					{children}
				</Box>
			</NextLink>
		)
	},
	{
		baseStyle: {
			p: 4
		}
	}
)

Card.Header = ({ children }) => {
	return <Box mb={2}>{children}</Box>
}

Card.Content = chakra(
	({ children, ...restProps }) => {
		return <Stack {...restProps}>{children}</Stack>
	},
	{
		baseStyle: {
			my: 2
		}
	}
)

Card.Title = ({ children }) => (
	<Text fontSize={{ base: '2xl', sm: '3xl' }}>{children}</Text>
)

Card.Subtitle = ({ children }) => (
	<Text fontSize={{ base: 'large', sm: 'larger' }}>{children}</Text>
)

Card.Footer = ({ children }) => {
	return <Flex justifyContent="space-between">{children}</Flex>
}

export default Card
