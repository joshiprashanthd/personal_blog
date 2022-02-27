import type { NextPage } from "next";
import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: {
			posts
		}
	};
}

const Home: NextPage<any> = ({ posts }) => {
	return (
		<div className="container mx-auto mb-8 px-10">
			<div className="grid grid-cols-1 gap-12 gap-y-12 lg:grid-cols-12">
				<div className="col-span-1 lg:col-span-8">
					{posts.map((post: { title: any; excerpt: string }) => (
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
