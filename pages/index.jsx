import { gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import RecentPostCard from "../components/RecentPostCard";
import client from "../services/apollo_client";

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query GetPostDetails {
				posts(orderBy: createdAt_ASC, last: 3) {
					title
					featuredImage {
						url
					}
					createdAt
					slug
					excerpt
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
			posts: data.posts
		}
	};
}


const Home = ({ posts }) => {
	console.log(posts);
	return (
		<>
			<Head>
				<title>Jastor J - Developer</title>
			</Head>
			<div className="mb-12 flex w-full flex-col-reverse items-center px-8 text-center md:flex-row md:justify-center md:gap-8 md:px-0">
				<div className="md:text-left">
					<h1 className="mb-4 text-4xl font-bold">Prashant Joshi</h1>
					<p className="font-light md:text-lg">
						Part Time Developer. Part Time Reader. Love to explore new
						technology. I am a self taught developer and a self taught reader.
					</p>
				</div>
				<div className="mb-8 md:mb-0 md:basis-1/3">
					<Image
						src="https://picsum.photos/200/300"
						height="150"
						width="150"
						className="h-16 w-16 rounded-full object-cover"
					/>
				</div>
			</div>
			<div className="px-8 md:px-0">
				<h1 className="mb-8 text-3xl font-bold">Recent Posts</h1>
				<div className="md:flex md:gap-4">
					{posts.map((post) => (
						<RecentPostCard post={post} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
