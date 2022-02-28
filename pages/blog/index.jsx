import { gql } from "@apollo/client";
import React from "react";
import { Categories, RecentPostCard } from "../../components";
import client from "../../services/apollo_client";

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

	return {
		props: {
			posts: posts.posts
		}
	};
}

const Blog = ({ posts }) => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<div className="hidden lg:col-span-3 lg:block"></div>
			<div className="col-span-12 gap-4 px-8 md:grid md:grid-cols-2 lg:col-span-6">
				{posts.map((post) => (
					<RecentPostCard post={post} />
				))}
			</div>
			<div className="col-span-12 px-12 lg:col-span-2">
				<Categories />
			</div>
		</div>
	);
};

export default Blog;
