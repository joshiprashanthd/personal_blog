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
			<div className="grid grid-cols-8">
				<div className="col-span-2">
					<span className="mb-8 block pl-4 font-serif text-4xl font-semibold">
						Blog
					</span>
				</div>
				<div className="col-span-6 grid grid-cols-2">
					{posts.map((post) => (
						<div>
							<PostCard key={post.frontmatter.title} post={post} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Blog
