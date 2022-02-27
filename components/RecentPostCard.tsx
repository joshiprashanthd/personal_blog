import moment from "moment";
import Link from "next/link";
import React from "react";
import { Post } from "../types";

type Props = {
	post: Post;
};

const RecentPostCard: React.ComponentType<Props> = ({ post }) => {
	console.log(post.excerpt);
	return (
		<Link href={`/post/${post.slug}`}>
			<div className="mb-8 flex w-full cursor-pointer rounded-md border-2 border-gray-200 bg-gray-50 shadow-slate-100 transition duration-500 hover:shadow-lg md:basis-1/3 md:flex-col">
				<img
					src={post.featuredImage?.url!}
					height="150"
					width="150"
					loading="lazy"
					className="h-36 w-36 rounded-l-md object-cover md:w-full md:rounded-none md:rounded-t-md"
				/>
				<div className="p-4">
					<p className="mb-4 text-sm text-gray-600">
						{moment(post.createdAt).format("MMM DD, YYYY")}
					</p>
					<h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
					<p className="text-gray-500">{post.excerpt}</p>
				</div>
			</div>
		</Link>
	);
};

export default RecentPostCard;
