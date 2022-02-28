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
		<div className="">
			<div className="grid grid-cols-8 gap-4">
				<div className="col-span-8 gap-4 px-8 md:col-span-6 md:grid md:grid-cols-2">
					{posts.map((post) => (
						<RecentPostCard post={post} />
					))}
				</div>
				<div className="col-span-8 px-12 md:col-span-2">
					<Categories />
				</div>
			</div>
		</div>
	);
};

export default Blog;
