import { useRouter } from 'next/router'
import React from 'react'
import { PostContent, SimilarPosts } from '../../../components'
import { getPostDetails, getPosts } from '../../../services'
import Head from 'next/head'

export async function getStaticPaths() {
	const posts = await getPosts()
	return {
		paths: posts.map((post) => ({ params: { slug: post.slug } })),
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const post = await getPostDetails(params.slug)
	return {
		props: {
			post
		},
		revalidate: 30
	}
}

const PostDetails = ({ post }) => {
	const router = useRouter()
	if (router.isFallback) return <div> Loading... </div>

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div>
				<PostContent post={post} />
				<SimilarPosts post={post} />
			</div>
		</>
	)
}

export default PostDetails
