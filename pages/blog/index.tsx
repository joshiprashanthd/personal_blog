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
				<div className="mb-8 flex items-center">
					<h1 className="mb-1 pl-4 font-serif text-4xl font-semibold">Blog</h1>
					<div className="mx-4 flex-1 border-t-2 border-gray-500" />
				</div>
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
