import { NextPage } from 'next'
import Head from 'next/head'
import { PostCard } from '../../components'
import { getPosts, Post } from '../../helpers/utilities'

export async function getStaticProps() {
	const posts = getPosts()
	return {
		props: {
			posts
		}
	}
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<div>
				<h1 className="mb-8 pl-4 font-serif text-4xl font-semibold">Blog</h1>
				<section className="grid grid-cols-2">
					{posts.map((post) => (
						<PostCard key={post.frontmatter.title} post={post} />
					))}
				</section>
			</div>
		</>
	)
}

export default Blog
