import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../../services/apollo_client'
import { Heading, Subtitle } from '../../../components/style'
import { Author, PostContent, SimilarPosts } from '../../../components'

const allPostsQuery = gql`
	query GetAllPosts {
		posts {
			author {
				name
				photo {
					url
				}
			}
			createdAt
			excerpt
			featuredImage {
				url
			}
			slug
			title
			categories {
				name
				slug
			}
		}
	}
`

const postDetailsQuery = gql`
	query GetPostDetails($slug: String!) {
		post(where: { slug: $slug }) {
			title
			author {
				bio
				name
				photo {
					url
				}
			}
			createdAt
			content
			excerpt
			slug
			categories {
				name
				slug
			}
			featuredImage {
				url
			}
		}
	}
`

export async function getStaticPaths() {
	const { data } = await client.query({
		query: allPostsQuery
	})

	return {
		paths: data.posts.map((post) => ({ params: { slug: post.slug } })),
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: postDetailsQuery,
		variables: {
			slug: params.slug
		}
	})

	return {
		props: {
			post: data.post
		},
		revalidate: 60 * 60 * 6
	}
}

const PostDetails = ({ post }) => {
	const router = useRouter()
	if (router.isFallback) return <div> Loading... </div>

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div>
				<div>
					<Author author={post.author} date={post.createdAt} />
					<span className="mb-4 block"></span>
					<Heading style="mb-4">{post.title}</Heading>
					<Subtitle style="mb-4">{post.excerpt}</Subtitle>
					<div className="mb-8 flex-wrap gap-2 lg:items-center lg:justify-center">
						{post.categories.map((category) => (
							<span className="inline-block rounded-md bg-blue-100 p-2 text-sm font-medium text-blue-500">
								{category.name}
							</span>
						))}
					</div>
				</div>
				<PostContent post={post} />
				<SimilarPosts post={post} />
			</div>
		</>
	)
}

export default PostDetails
