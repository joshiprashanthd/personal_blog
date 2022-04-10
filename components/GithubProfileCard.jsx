import React from 'react'
import {
	Stack,
	Flex,
	Box,
	useColorModeValue,
	Heading,
	Text,
	Image
} from '@chakra-ui/react'

const GithubProfileCard = ({ user }) => {
	const bgColor = useColorModeValue('gray.50', 'gray.900')
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const subheadingColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Box
			as="a"
			display="block"
			href="https://github.com/joshiprashanthd"
			target="_blank"
			flexGrow={1}
			mb={8}
			w="full"
			cursor="pointer"
			rounded="lg"
			borderWidth={2}
			borderColor={borderColor}
			backgroundColor={bgColor}
			p={4}
			transitionDuration="300ms"
			_hover={{
				shadow: 'lg',
				transform: 'translateY(-1px)'
			}}
		>
			<Flex flexDirection={['column', 'row']}>
				<Box className="mb-4">
					<Image
						src={user.avatarUrl}
						width="80px"
						rounded="full"
						mb={[4, 0]}
						mr={[0, 4]}
					/>
				</Box>
				<Stack>
					<Heading fontSize="2xl">{user.name}</Heading>
					<Text color="blue.400" fontWeight="semibold">
						{user.login}
					</Text>
					<Text color={subheadingColor}>{user.bio}</Text>
				</Stack>
			</Flex>
		</Box>
	)
}

export default GithubProfileCard
