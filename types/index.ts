export type Post = {
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	featuredImageUrl?: string;
	featuredPost: boolean;
	author: Author;
	createdAt: string;
	categories: [Category];
};

export type Category = {
	name: string;
	slug: string;
	posts: [Post];
};

export type Comment = {
	name: string;
	email: string;
	comment: string;
};

export type Author = {
	name: string;
	photoUrl?: string;
	bio: string;
	post: [Post];
};
