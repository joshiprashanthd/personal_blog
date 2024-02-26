import React from 'react'
import { allPosts } from 'contentlayer/generated'
import {compareDesc, format} from 'date-fns'
import Link from "next/link";
import {Card, CardDescription, CardHeader, CardTitle} from "../../components/ui/Card";

const Blog = () => {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	)

	return (
		<section>
			<div className="mb-8 flex items-center">
				<h1 className="mb-1 pl-4 font-serif text-3xl font-semibold sm:text-4xl">
					Blog
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-primary-light dark:border-primary-dark" />
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
				{posts.map((post) => (
					<Card asChild>
						<Link href={post.url}>
							<CardHeader>
								{format(new Date(post.publishedAt), 'MMM d, yyyy')}
							</CardHeader>
							<CardTitle>
								{post.title}
							</CardTitle>
							<CardDescription>
								{post.summary}
							</CardDescription>
						</Link>
					</Card>
				))}
			</div>
		</section>
	)
}

export default Blog
