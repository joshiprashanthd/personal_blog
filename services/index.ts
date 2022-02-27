import { request, gql } from "graphql-request";

export const getPosts = async () => {
	const query = gql`
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
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query);
	return result.posts.map((post: any) => post);
};

export const getRecentPosts = async () => {
	//prettier-ignore
	const query = gql`
		query GetPostDetails {
			posts(
				orderBy: createdAt_ASC 
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query);
	return result.posts;
};

export const getSimilarPosts = async ({ slug, categories }: any) => {
	const query = gql`
		query GetSimilarPosts($slug: String!, $categories: [String!]) {
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				orderBy: createdAt_DESC
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query, {
		slug,
		categories
	});

	return result.posts.map((post: any) => post);
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query);
	return result.categories;
};

export const getPostDetails = async (slug: string) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				title
				author {
					bio
					name
					photo {
						url
					}
				}
				createdAt
				content
				excerpt
				slug
				categories {
					name
					slug
				}
				featuredImage {
					url
				}
			}
		}
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query, {
		slug
	});
	return result.post;
};

export const submitComment = async (commentsObj: any) => {
	const result = await fetch("/api/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(commentsObj)
	});

	return result.json();
};

export const getComments = async (slug: string) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				name
				createdAt
				comment
			}
		}
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query, {
		slug
	});
	return result.comments;
};

export const getCategoryPost = async (slug: string) => {
	const query = gql`
		query GetCategoryPost($slug: String!) {
			postsConnection(where: { categories_some: { slug: $slug } }) {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(process.env.GRAPHCMS_ENDPOINT!, query, { slug });

	return result.postsConnection.edges.map((edge: any) => edge.node);
};
