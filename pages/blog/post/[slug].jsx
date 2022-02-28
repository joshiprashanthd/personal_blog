import { useRouter } from 'next/router'
import React from 'react'
import { PostContent } from '../../../components'
import { getPostDetails, getPosts } from '../../../services'

export async function getStaticPaths() {
	const posts = await getPosts()
	return {
		paths: posts.map((post) => ({ params: { slug: post.slug } })),
		fallback: true
	}
}

export async function getStaticProps({ params }) {
	const post = await getPostDetails(params.slug)
	return {
		props: {
			post
		}
	}
}

const PostDetails = ({ post }) => {
	const router = useRouter()
	if (router.isFallback) return <div> Loading... </div>

	return (
		<div>
			<PostContent post={post} />
		</div>
	)
}

export default PostDetails
