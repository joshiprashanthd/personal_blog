import React from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'
import { gql } from '@apollo/client'
import { Text, Heading, Flex, Box, useColorModeValue } from '@chakra-ui/react'

import client from '../../../services/apollo_client'
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

	const subheadingColor = useColorModeValue('gray.600', 'gray.400')
	const topicBgColor = useColorModeValue('blue.50', 'blue.900')

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<Box>
				<Box>
					<Author author={post.author} date={post.createdAt} />
					<Heading my={4} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
						{post.title}
					</Heading>
					<Text mb={4} color={subheadingColor}>
						{post.excerpt}
					</Text>
					<Flex flexWrap mb={8} gap={2}>
						{post.categories.map((category) => (
							<Box bg={topicBgColor} py={1} px={2} rounded="full">
								<Text color="blue.300" fontWeight="semibold" fontSize="sm">
									{category.name}
								</Text>
							</Box>
						))}
					</Flex>
				</Box>
				<PostContent post={post} />
				<SimilarPosts post={post} />
			</Box>
		</>
	)
}

export default PostDetails
