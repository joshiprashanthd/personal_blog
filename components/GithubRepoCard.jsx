import { useColorModeValue, Box, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'

const GithubRepoCard = ({ repo }) => {
	const bgColor = useColorModeValue('gray.50', 'gray.900')
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const subheadingColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Box
			as="a"
			display="block"
			href={repo.url}
			key={repo.name}
			target="_blank"
			p={4}
			cursor="pointer"
			rounded="lg"
			borderWidth={2}
			borderColor={borderColor}
			backgroundColor={bgColor}
			transitionDuration="300ms"
			_hover={{
				shadow: 'lg',
				transform: 'translateY(-1px)'
			}}
		>
			<Heading mb={2} fontSize="xl">
				{repo.name}
			</Heading>
			<Text mb={2} fontSize="sm" color={subheadingColor}>
				written in{' '}
				<Text as="span" color="blue.400" fontWeight="semibold">
					{repo.primaryLanguage.name}
				</Text>
			</Text>
			<Text mb={4} color={subheadingColor}>
				{repo.description}
			</Text>
			<Flex gap={2}>
				{repo.repositoryTopics.nodes.map((topic) => (
					<Text color="blue.400" fontWeight="semibold" fontSize="sm">
						{topic.topic.name}
					</Text>
				))}
			</Flex>
		</Box>
	)
}

export default GithubRepoCard
