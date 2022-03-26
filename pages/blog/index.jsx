import { gql } from '@apollo/client'
import Head from 'next/head'
import React from 'react'
import { PostCard } from '../../components'
import { Heading, Grid, GridItem } from '@chakra-ui/react'
import client from '../../services/apollo_client'

export async function getStaticProps() {
	const { data: posts } = await client.query({
		query: gql`
			query GetAllPosts {
				posts {
					id
					title
					featuredImage {
						url
					}
					excerpt
					createdAt
					slug
					author {
						name
						photo {
							url
						}
					}
				}
			}
		`
	})

	return {
		props: {
			posts: posts.posts
		},
		revalidate: 60 * 60 * 6
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
							<PostCard key={post.id} post={post} />
						</GridItem>
					))}
				</Grid>
			</div>
		</>
	)
}

export default Blog
