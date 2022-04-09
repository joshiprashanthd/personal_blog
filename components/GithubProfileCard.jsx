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
			href="https://github.com/joshiprashanthd"
			target="_blank"
			flexGrow={1}
			mb={8}
			w="full"
			cursor="pointer"
			rounded="lg"
			borderWidth="1px"
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
						height="80px"
						width="80px"
						rounded="full"
						mb={[4, 0]}
						mr={4}
					/>
				</Box>
				<Stack>
					<Stack mb={1}>
						<Heading fontSize="2xl" mb={-1}>
							{user.name}
						</Heading>
						<Text color="blue.400" fontWeight="semibold">
							{user.login}
						</Text>
					</Stack>
					<Text color={subheadingColor}>{user.bio}</Text>
				</Stack>
			</Flex>
		</Box>
	)
}

export default GithubProfileCard
