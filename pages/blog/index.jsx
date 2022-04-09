import Head from 'next/head'
import React from 'react'
import { PostCard } from '../../components'
import { Heading, Grid, GridItem } from '@chakra-ui/react'
import { getPosts } from '../../helpers/utilities'

export async function getStaticProps() {
	const posts = getPosts()
	return {
		props: {
			posts
		}
	}
}

const Blog = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<div>
				<Heading mb={8} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
					Blog
				</Heading>
				<Grid templateColumns="repeat(2, 1fr)" gap={4}>
					{posts.map((post) => (
						<GridItem colSpan={{ base: 2, md: 1 }}>
							<PostCard key={post.id} post={post.frontmatter} />
						</GridItem>
					))}
				</Grid>
			</div>
		</>
	)
}

export default Blog
