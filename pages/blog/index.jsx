import { gql } from '@apollo/client'
import Head from 'next/head'
import React from 'react'
import { PostCard } from '../../components'
import { Heading } from '../../components/style'
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
				<Heading style="mb-8">Blog</Heading>
				<div className="grid grid-cols-2 gap-4">
					{posts.map((post) => (
						<div className="col-span-2 sm:col-span-1">
							<PostCard key={post.id} post={post} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Blog
