import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { RecentPostCard } from '.'

const query = gql`
	query GetSimilarPosts($slug: String!, $categories: [String!]) {
		posts(
			where: {
				slug_not: $slug
				AND: { categories_some: { slug_in: $categories } }
			}
			orderBy: createdAt_DESC
			last: 3
		) {
			title
			excerpt
			author {
				name
				photo {
					url
				}
			}
			createdAt
			slug
		}
	}
`

const SimilarPosts = ({ post }) => {
	const { data, loading, error } = useQuery(query, {
		variables: {
			slug: post.slug,
			categories: post.categories.map((category) => category.slug)
		}
	})

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error!</div>

	return (
		<div className="pb-16">
			<h2 className="md:text-4x mb-8 text-3xl font-bold">
				You might also like...
			</h2>
			<div className="flex flex-col gap-4">
				{data.posts.map((post) => (
					<RecentPostCard post={post} />
				))}
			</div>
		</div>
	)
}

export default SimilarPosts
