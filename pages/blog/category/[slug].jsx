import React from 'react'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import Head from 'next/head'
import client from '../../../services/apollo_client'
import { Heading } from '../../../components/style'
import { PostCard } from '../../../components'

const categoriesPathQuery = gql`
	query Categories {
		categories {
			name
			slug
		}
	}
`

const postsWithCategoryQuery = gql`
	query PostsWithCategory($slug: String!) {
		posts(where: { categories_some: { slug: $slug } }) {
			id
			author {
				name
				photo {
					url
				}
			}
			categories {
				name
				slug
			}
			createdAt
			excerpt
			featuredImage {
				url
			}
			slug
			title
		}
	}
`

export async function getStaticPaths() {
	const { data } = await client.query({
		query: categoriesPathQuery
	})

	return {
		paths: data.categories.map((category) => ({
			params: { slug: category.slug }
		})),
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: postsWithCategoryQuery,
		variables: {
			slug: params.slug
		}
	})

	return {
		props: {
			posts: data.posts,
			category: params.slug
		}
	}
}

const Category = ({ posts, category }) => {
	const router = useRouter()
	if (router.isFallback) return <div>Loading...</div>
	return (
		<>
			<Head>
				<title>
					Category: {`${category[0].toUpperCase()}${category.slice(1)}`}
				</title>
			</Head>
			<div>
				<Heading style="mb-8">
					Category: {`${category[0].toUpperCase()}${category.slice(1)}`}
				</Heading>
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

export default Category
