import React from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import { PostCard } from '.'

const SimilarPosts = ({ posts }) => {
	return (
		posts.length > 0 && (
			<Stack>
				<Heading mb={8} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
					You might also like...
				</Heading>
				<Stack>
					{posts.map((post) => (
						<PostCard post={post.frontmatter} key={post.title} />
					))}
				</Stack>
			</Stack>
		)
	)
}

export default SimilarPosts
