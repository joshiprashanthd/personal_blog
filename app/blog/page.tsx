import React from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format } from 'date-fns'
import Link from 'next/link'
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from '../../components/ui/Card'

import CategoryChip from '../../components/CategoryChip'

const Blog = () => {
	const posts: Post[] = allPosts.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	)

	return (
		<section>
			<div className="mb-8 flex items-center">
				<h1 className="mb-1 pl-4 font-ui text-3xl font-semibold sm:text-4xl">
					Blog
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-primary-light dark:border-primary-dark" />
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
				{posts.map((post) => (
					<Card>
						<CardHeader>
							{format(new Date(post.publishedAt), 'MMM d, yyyy')}
						</CardHeader>
						<div className="h-2" />

						<Link href={post.url}>
							<CardTitle className="underline-offset-4 hover:underline">
								{post.title}
							</CardTitle>
						</Link>
						<CardDescription>{post.summary}</CardDescription>
						<div className="h-2" />
						<CategoryChip post={post} />
					</Card>
				))}
			</div>
		</section>
	)
}

export default Blog
