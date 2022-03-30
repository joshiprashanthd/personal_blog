import NextLink from 'next/link'
import React from 'react'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const PostCard = ({ post }) => {
	const bgColor = useColorModeValue('gray.50', 'gray.900')
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const subheadingColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<NextLink href={`/blog/post/${post.slug}`}>
			<Flex
				w="full"
				flexGrow={1}
				cursor="pointer"
				flexDirection="column"
				rounded="lg"
				border="1px"
				borderColor={borderColor}
				flexBasis={{ base: 'full', md: 1 / 2, lg: 1 / 3 }}
				backgroundColor={bgColor}
				padding={4}
				transitionDuration="300ms"
				_hover={{
					shadow: 'lg',
					transform: 'translateY(-1px)'
				}}
			>
				<Box mb={4}>
					<Text mb={4} fontSize="sm" fontWeight="bold" color="blue.500">
						Article
					</Text>
					<Heading fontSize={{ base: 'xl', sm: '2xl' }} mb={2}>
						{post.title}
					</Heading>
					<Text fontSize={{ base: 'sm', sm: 'medium' }} color={subheadingColor}>
						{post.excerpt}
					</Text>
				</Box>
			</Flex>
		</NextLink>
	)
}

export default PostCard
