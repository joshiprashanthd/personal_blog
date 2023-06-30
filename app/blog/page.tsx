import React from 'react'
import PostCard from '../../components/PostCard'
import { allPosts } from 'contentlayer/generated'

const Blog = () => {
	return (
		<section>
			<div className="mb-8 flex items-center">
				<h1 className="mb-1 pl-4 font-serif text-3xl font-semibold sm:text-4xl">
					Blog
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-purple-500" />
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
				{allPosts.map((post) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
		</section>
	)
}

export default Blog
