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
		<div className="container mx-auto mb-8">
			<div className="grid grid-cols-1 gap-12 xl:grid-cols-12">
				<div className="hidden xl:col-span-2 xl:block"></div>
				<div className="col-span-1 xl:col-span-8">
					<PostContent post={post} />
				</div>
				<div className="hidden xl:col-span-2 xl:block"></div>
			</div>
		</div>
	);
};

export default PostDetails;
