import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns'
import { type Post } from 'contentlayer/generated'

const PostCard = ({ post }: { post: Post }) => {
	return (
		<Link
			href={post.url}
			className="group block rounded-md px-4 py-2 transition-all hover:-translate-y-1 hover:bg-purple-500/20"
		>
			<span className="text-bold font-mono text-xs text-purple-400 group-hover:text-white">
				{format(new Date(post.publishedAt), 'MMM d, yyyy')}
			</span>
			<h1 className="mb-1 font-medium group-hover:text-purple-400 sm:text-lg">
				{post.title}
			</h1>
			<p className="text-sm font-light sm:text-sm">{post.summary}</p>
		</Link>
	)
}

export default PostCard
