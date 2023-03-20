import React from 'react'
import { PostCard } from '.'
import { Post } from '../helpers/utilities'

const SimilarPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
	return (
		posts.length > 0 && (
			<section className="">
				<h1>You might also like...</h1>
				<div>
					{posts.map((post) => (
						<PostCard post={post} key={post.frontmatter.title} />
					))}
				</div>
			</section>
		)
	)
}

export default SimilarPosts
