import moment from 'moment'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { components } from '../utilities/react_markdown_components'

const PostContent = ({ post }) => {
	return (
		<div className="text-center">
			<div className="">
				<p className="mb-4 text-gray-500">
					Published {moment(post.createdAt).format('MMM DD, YYYY')}
				</p>
				<h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
				<p className="mx-auto mb-4 sm:w-2/3 md:text-lg">{post.excerpt}</p>
				<div className="mb-8 flex-wrap lg:items-center lg:justify-center">
					{post.categories.map((category) => (
						<span className="m-2 inline-block rounded-md bg-blue-100  p-2 text-sm font-medium text-blue-500">
							{category.name}
						</span>
					))}
				</div>
			</div>
			<div className="relative overflow-hidden pb-16">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					layout="responsive"
					className="h-full w-full rounded-lg object-cover object-top"
				/>
			</div>
			<div className="pb-16 text-left">
				<ReactMarkdown components={components}>{post.content}</ReactMarkdown>
			</div>
		</div>
	)
}

export default PostContent
