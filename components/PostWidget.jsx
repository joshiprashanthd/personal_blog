import moment from "moment";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts({ categories, slug }).then((posts) => {
				setRelatedPosts(posts);
			});
		} else {
			getRecentPosts().then((data) => {
				setRelatedPosts(data);
			});
		}
	}, [slug]);

	return (
		<div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
			<h3 className="mb-8 border-b border-gray-100 pb-4 text-xl font-semibold">
				{slug ? "Similar Posts" : "Recent Posts"}
			</h3>
			{relatedPosts.map((post) => (
				<div key={post.title} className="mb-4 flex w-full items-center">
					<div className="w-16 flex-none">
						<img
							alt={post.title}
							className="h-16 w-16 rounded-full  object-cover align-middle"
							src={post.featuredImage.url}
						/>
					</div>
					<div className="ml-4 flex-grow">
						<p className="text-xs text-gray-500">
							{moment(post.createdAt).format("MMMM Do YYYY")}
						</p>
						<Link href={`/post/${post.slug}`} key={post.title} prefetch={true}>
							<span className="cursor-pointer text-lg font-medium">
								{post.title}
							</span>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
