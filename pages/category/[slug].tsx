import { useRouter } from "next/router";
import React from "react";
import { Categories, PostCard } from "../../components";
import { getCategories, getCategoryPost } from "../../services";

export async function getStaticProps({ params }: any) {
	const posts = await getCategoryPost(params.slug);

	return {
		props: { posts }
	};
}

export async function getStaticPaths() {
	const categories = await getCategories();
	return {
		paths: categories.map(({ slug }: any) => ({ params: { slug } })),
		fallback: true
	};
}

const CategoryPost = ({ posts }: any) => {
	const router = useRouter();

	if (router.isFallback) {
		return (
			<div className="top-1/2 mx-auto text-3xl font-semibold">Loading...</div>
		);
	}

	return (
		<div className="container mx-auto mb-8 pb-10">
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
				<div className="col-span-1 lg:col-span-8">
					{posts.map((post: any, index: any) => (
						<PostCard post={post} key={index} />
					))}
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="relative top-8 lg:sticky">
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryPost;
