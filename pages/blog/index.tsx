import { gql } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import { RecentPostCard } from "../../components";
import client from "../../services/apollo_client";
import { Category, Post } from "../../types";

export async function getStaticProps() {
	const { data: posts } = await client.query({
		query: gql`
			query GetAllPosts {
				posts {
					id
					title
					featuredImage {
						url
					}
					excerpt
					createdAt
					slug
					author {
						name
						photo {
							url
						}
					}
				}
			}
		`
	});

	const { data: categories } = await client.query({
		query: gql`
			query GetAllCategories {
				categories {
					name
					slug
				}
			}
		`
	});

	return {
		props: {
			posts: posts.posts,
			categories: categories.categories
		}
	};
}

type Props = {
	posts: [Post];
	categories: [Category];
};

const Blog: React.ComponentType<Props> = ({ posts, categories }) => {
	const [showCategories, setShowCategories] = useState(false);

	return (
		<div className="">
			<div className="grid grid-cols-8 gap-4">
				<div className="col-span-8 gap-4 px-8 md:col-span-6 md:grid md:grid-cols-2">
					{posts.map((post) => (
						<RecentPostCard post={post} />
					))}
				</div>
				<div className="col-span-8 px-12 md:col-span-2">
					<h2 className="mb-4 border-b border-gray-200 pb-4 text-xl font-semibold">
						Categories
					</h2>
					{categories.map((category) => (
						<Link href={`/blog/category/${category.slug}`}>
							<span className="mb-4 block cursor-pointer transition duration-500 hover:translate-x-2">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
