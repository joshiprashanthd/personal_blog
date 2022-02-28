import moment from "moment";
import React from "react";
import ReactMarkdown from "react-markdown";
import { components } from "../utilities/react_markdown_components";
import Image from "next/image";

const PostContent = ({ post }) => {
	return (
		<div className="mb-8 rounded-lg pb-8 lg:p-8">
			<h1 className="mb-8 text-5xl font-light">{post.title}</h1>
			<div className="mb-4 flex w-full items-center justify-between">
				<div className="flex items-center">
					<Image
						src={post.author.photo.url}
						height="40px"
						width="40px"
						className="h-16 w-16 rounded-full"
					/>
					<p className="ml-2">{post.author.name}</p>
				</div>
				<div className="">{moment(post.createdAt).format("MMMM DD, YYYY")}</div>
			</div>
			<div className="relative mb-6 overflow-hidden ">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					className="h-full w-full rounded-lg object-top"
				/>
			</div>
			<div className="px-4 lg:px-0">
				<ReactMarkdown components={components}>{post.content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default PostContent;
