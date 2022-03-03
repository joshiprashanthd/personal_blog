import { useRouter } from 'next/router'
import React from 'react'
import { PostContent, SimilarPosts } from '../../../components'
import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../../services/apollo_client'

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
		revalidate: 30
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
				<PostContent post={post} />
				<SimilarPosts post={post} />
			</div>
		</>
	)
}

export default PostDetails
