import React from 'react'
import moment from 'moment'
import { Text, Box, Flex, Image, useColorModeValue } from '@chakra-ui/react'

const Author = ({ author, date }) => {
	const dateColor = useColorModeValue('gray.600', 'gray.500')

	return (
		<Flex align="center">
			<Image src={author.photo.url} h={10} w={10} rounded="full" mr={4} />
			<Box>
				<Text fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="semibold">
					{author.name}
				</Text>
				{date && (
					<Text fontSize={{ base: 'xs', sm: 'sm' }} color={dateColor}>
						{moment(date).format('MMM DD, YYYY')}
					</Text>
				)}
			</Box>
		</Flex>
	)
}

export default Author
