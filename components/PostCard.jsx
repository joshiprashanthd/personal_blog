import NextLink from 'next/link'
import React from 'react'
import { Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { format } from 'date-fns'

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
				borderWidth={2}
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
				<Stack>
					<Text
						color="blue.400"
						fontWeight="bold"
						fontSize={{ base: 'smaller', sm: 'small' }}
					>
						{post.category}
					</Text>
					<Heading fontSize={{ base: 'xl', sm: '2xl' }}>{post.title}</Heading>
					<Text
						fontSize={{ base: 'sm', sm: 'medium' }}
						color={subheadingColor}
						mb={2}
					>
						{post.summary}
					</Text>
					<Flex justify="space-between">
						<Text
							fontSize={{ base: 'smaller', sm: 'small' }}
							color={subheadingColor}
						>
							{format(new Date(post.publishedAt), 'MMM d, yyyy')}
						</Text>
						<Text
							fontSize={{ base: 'smaller', sm: 'small' }}
							color={subheadingColor}
						>
							{post.readingTime.text}
						</Text>
					</Flex>
				</Stack>
			</Flex>
		</NextLink>
	)
}

export default PostCard
