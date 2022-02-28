import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const RecentPostCard = ({ post }) => {
	return (
		<Link href={`/blog/post/${post.slug}`}>
			<div className="flex w-full flex-grow cursor-pointer flex-col rounded-lg border-2 bg-gray-50 p-4 transition duration-500 hover:shadow-lg hover:shadow-blue-200 md:basis-1/3">
				<div className="">
					<div className="mb-4">
						<p className="mb-4 text-sm font-bold text-blue-600">Article</p>
						<h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
						<p className="text-gray-500">{post.excerpt}</p>
					</div>
					<div className="flex items-center">
						<img
							src={post.author.photo.url}
							height="10px"
							width="10px"
							className="mr-4 h-10 w-10 rounded-full"
						/>
						<div>
							<p className="text-sm font-semibold">{post.author?.name}</p>
							<p className="font-mono text-xs text-gray-500">
								{moment(post.createdAt).format('MMM DD, YYYY')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default RecentPostCard
