import { gql, useQuery } from '@apollo/client'
import React from 'react'
import Link from 'next/link'

const query = gql`
	query GetCategories {
		categories {
			name
			slug
		}
	}
`

const Footer = () => {
	const { loading, error, data } = useQuery(query)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>
	return (
		<div className="border-t border-gray-200 py-16">
			<div className="flex flex-col gap-12 sm:flex-row">
				<div className="flex flex-col gap-4">
					<Link href="/">
						<p className="cursor-pointer text-lg text-gray-500 hover:text-gray-700">
							Home
						</p>
					</Link>
					<Link href="/projects">
						<p className="cursor-pointer text-lg text-gray-500 hover:text-gray-700">
							Projects
						</p>
					</Link>
					<Link href="/blog">
						<p className="cursor-pointer text-lg text-gray-500 hover:text-gray-700">
							Blog
						</p>
					</Link>
				</div>
				<div className="flex flex-col gap-4">
					{data.categories.map((category) => (
						<Link href={`/blog/category/${category.slug}`}>
							<p
								key={category.slug}
								className="cursor-pointer text-lg text-gray-500 hover:text-gray-700"
							>
								{category.name}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Footer