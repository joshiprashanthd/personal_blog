import Link from 'next/link'
import React from 'react'
import Author from '../components/Author'
import { Subheading2, Subtitle2 } from './style'

const PostCard = ({ post }) => {
	return (
		<Link href={`/blog/post/${post.slug}`}>
			<div className="flex w-full flex-grow cursor-pointer flex-col rounded-lg border-2 bg-gray-50 p-4 transition duration-500 hover:shadow-lg hover:shadow-blue-200 md:basis-1/3">
				<div className="mb-4">
					<p className="mb-4 text-sm font-bold text-blue-600">Article</p>
					<Subheading2 style="mb-2">{post.title}</Subheading2>
					<Subtitle2>{post.excerpt}</Subtitle2>
				</div>
				<Author author={post.author} date={post.createdAt} />
			</div>
		</Link>
	)
}

export default PostCard
