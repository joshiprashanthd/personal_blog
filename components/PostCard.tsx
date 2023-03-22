import NextLink from 'next/link'
import React from 'react'
import { Post } from '../helpers/utilities'

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<NextLink href={`/blog/post/${post.frontmatter.slug}`}>
			<a className="b-hover b-hover-bg block rounded-md px-4 py-2 hover:shadow-md">
				<h1 className="text-lg font-semibold">{post.frontmatter.title}</h1>
				<p className="text-sm font-light">{post.frontmatter.summary}</p>
			</a>
		</NextLink>
	)
}

export default PostCard
