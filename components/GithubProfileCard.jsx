import React from 'react'
import { Box, useColorModeValue, Heading, Text } from '@chakra-ui/react'

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
			<div className="flex flex-col items-start sm:flex-row sm:gap-4">
				<div className="mb-4">
					<img
						src={user.avatarUrl}
						height="10px"
						width="10px"
						className="mr-4 h-[80px] w-[80px] rounded-full"
					/>
				</div>
				<div>
					<div className="mb-2">
						<Heading fontSize="2xl">{user.name}</Heading>
						<Text color="blue.400" fontWeight="semibold">
							{user.login}
						</Text>
					</div>
					<Text mb={2} color={subheadingColor}>
						{user.bio}
					</Text>
				</div>
			</div>
		</Box>
	)
}

export default GithubProfileCard
