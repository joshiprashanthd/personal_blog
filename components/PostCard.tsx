import NextLink from 'next/link'
import React from 'react'
import { Post } from '../helpers/utilities'
import { format } from 'date-fns'

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<NextLink href={`/blog/post/${post.frontmatter.slug}`}>
			<a className="b-hover b-hover-bg block rounded-md px-4 py-2 hover:shadow-md">
				<span className="text-bold font-mono text-xs text-purple-400">
					{format(new Date(post.frontmatter.publishedAt), 'MMM d, yyyy')}
				</span>
				<h1 className="mb-1 font-semibold sm:text-lg">
					{post.frontmatter.title}
				</h1>
				<p className="text-sm font-light sm:text-sm">
					{post.frontmatter.summary}
				</p>
			</a>
		</NextLink>
	)
}

export default PostCard
