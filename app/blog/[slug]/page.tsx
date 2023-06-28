import React from 'react'
import { format } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '../../../components/Mdx'

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug
	}))
}

export default async function Post({ params }) {
	const post = allPosts.find((post) => post.slug === params.slug)

	if (!post) return <div>Not Found....</div>

	return (
		<section>
			<h1 className="mb-4 font-serif text-4xl font-bold">{post.title}</h1>
			<div className="mb-8 flex items-center">
				<div className="rounded-md border border-neutral-800 bg-neutral-900 px-1">
					<span className="font-mono text-xs sm:text-sm">
						{format(new Date(post.publishedAt), 'MMM d, yyyy')}
					</span>
				</div>
			</div>
			<Mdx code={post.body.code} />
		</section>
	)
}
