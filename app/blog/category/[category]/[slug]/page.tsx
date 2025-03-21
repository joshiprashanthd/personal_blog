import React from 'react'
import { format } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@components/Mdx'
import CategoryChip from '@components/CategoryChip'

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug
	}))
}

export default async function Post({ params }) {
	console.log('params', params)
	const post = allPosts.find((post) => post.slug === params.slug)

	if (!post) return <div>Not Found....</div>

	return (
		<section>
			<CategoryChip post={post} />
			<div className="h-4" />
			<h1 className="mb-4 font-ui text-4xl font-bold">{post.title}</h1>
			<div className="mb-8 flex items-center">
				<span className="text-xs sm:text-sm">
					{format(new Date(post.publishedAt), 'MMM d, yyyy')}
				</span>
				<div className="mx-4 flex-1 border-t-2 border-primary-light dark:border-primary-dark" />
			</div>
			<Mdx code={post.body.code} />
		</section>
	)
}
