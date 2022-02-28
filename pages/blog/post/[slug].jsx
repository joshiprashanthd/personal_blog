import { useRouter } from "next/router";
import React from "react";
import { Categories, PostWidget } from "../../../components";
import { PostContent } from "../../../components";
import { getPostDetails, getPosts } from "../../../services";

export async function getStaticPaths() {
	const posts = await getPosts();
	return {
		paths: posts.map((post) => ({ params: { slug: post.slug } })),
		fallback: true
	};
}

export async function getStaticProps({ params }) {
	const post = await getPostDetails(params.slug);
	return {
		props: {
			post
		}
	};
}

const PostDetails = ({ post }) => {
	const router = useRouter();
	if (router.isFallback) return <div> Loading... </div>;

	return (
		<div className="container mx-auto mb-8 px-10">
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
				<div className="col-span-1 lg:col-span-8">
					<PostContent post={post} />
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="sticky top-8">
						<PostWidget
							categories={post.categories.map((category) => category.slug)}
							slug={post.slug}
						/>
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;
