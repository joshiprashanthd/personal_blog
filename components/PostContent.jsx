import moment from "moment";
import React from "react";
import ReactMarkdown from "react-markdown";
import { components } from "../utilities/react_markdown_components";

const PostContent = ({ post }) => {
	return (
		<div className="text-center">
			<div className="px-8">
				<p className="mb-4 text-gray-500">
					Published {moment(post.createdAt).format("MMM DD, YYYY")}
				</p>
				<h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
				<p className="mx-auto mb-4 lg:w-2/3 lg:text-lg">{post.excerpt}</p>
				<div className="mb-8 flex-wrap lg:items-center lg:justify-center">
					{post.categories.map((category) => (
						<span className="m-2 inline-block rounded-md bg-gray-50 p-2 text-sm font-medium lg:px-4 lg:py-2">
							{category.name}
						</span>
					))}
				</div>
			</div>
			<div className="relative mb-8 overflow-hidden">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					layout="responsive"
					className="h-full w-full object-cover object-top"
				/>
			</div>
			<div className="px-8 text-left lg:px-20">
				<ReactMarkdown components={components}>{post.content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default PostContent;
