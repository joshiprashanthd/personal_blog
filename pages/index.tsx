import { gql } from "@apollo/client";
import { Categories, PostCard, PostWidget } from "../components";
import client from "../services/apollo_client";
import { Post } from "../types";

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query GetAllPosts {
				posts {
					author {
						name
						photo {
							url
						}
					}
					createdAt
					excerpt
					featuredImage {
						url
					}
					slug
					title
					categories {
						name
						slug
					}
				}
			}
		`
	});

	return {
		props: {
			posts: data.posts
		}
	};
}

type Props = {
	posts: [Post];
};

const Home: React.ComponentType<Props> = ({ posts }) => {
	return (
		<div className="container mx-auto mb-8 px-10">
			<div className="grid grid-cols-1 gap-12 gap-y-12 lg:grid-cols-12">
				<div className="col-span-1 lg:col-span-8">
					{posts.map((post) => (
						<PostCard post={post as any} key={post.title} />
					))}
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="relative top-8 lg:sticky">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
