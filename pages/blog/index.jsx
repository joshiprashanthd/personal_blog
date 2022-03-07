import { gql } from '@apollo/client'
import Head from 'next/head'
import React from 'react'
import { PostCard } from '../../components'
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
		revalidate: 30
	}
}

const Blog = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<div className="pb-16">
				<h1 className="mb-8 font-heading text-4xl font-bold sm:text-5xl">
					Blog
				</h1>
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
