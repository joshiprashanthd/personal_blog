import Head from 'next/head'
import { useRouter } from 'next/router'

import { MDXComponents } from '../../../components'

import { MDXRemote } from 'next-mdx-remote'

import { getMDXPaths, getPostBySlug, Post } from '../../../helpers/utilities'

import { format } from 'date-fns'
import { NextPage } from 'next'

export async function getStaticPaths() {
	const paths = (await getMDXPaths('data/blog')).map((path) => ({
		params: { slug: path.replace('.mdx', '') }
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const post = await getPostBySlug(params.slug)
	return {
		props: {
			post
		}
	}
}

const PostDetails: NextPage<{ post: Post }> = ({ post }) => {
	const router = useRouter()
	if (router.isFallback) return <div> Loading... </div>

	return (
		<>
			<Head>
				<title>{post.frontmatter.title}</title>
			</Head>
			<section>
				<h1 className="mb-4 font-serif text-4xl font-bold">
					{post.frontmatter.title}
				</h1>
				<div className="mb-8 flex items-center">
					<div className="bg-[#252525] px-1">
						<span className="font-mono text-sm">
							{format(new Date(post.frontmatter.publishedAt), 'MMM d, yyyy')}
						</span>
					</div>
					<div className="mx-4 flex-1 border-t-2 border-gray-500" />
					<div className="font-light">
						<span className="font-mono text-sm font-light text-gray-500">
							{post.frontmatter.readingTime.text}
						</span>
					</div>
				</div>
			</section>
			<article>
				<MDXRemote compiledSource={post.source} components={MDXComponents} />
			</article>
		</>
	)
}

export default PostDetails
