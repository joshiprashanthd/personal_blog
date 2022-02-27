export enum UserKind {
	MEMBER,
	PAT,
	PUBLIC
}

export type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
	title: string;
	slug: string;
	excerpt: string;
	featuredPost: boolean;
	content: string;
	author?: Author;
	featuredImage?: Asset;
	comments: [Comment];
	categories: [Category];
	createdBy?: User;
	updatedBy?: User;
	publishedBy: User;
};

export type User = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
	name: string;
	picture?: string;
	isActive: boolean;
	kind: UserKind;
};

export type Author = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
	name: string;
	bio?: string;
	createdBy?: User;
	updatedBy?: User;
	publishedBy: User;
	photo: Asset;
	post: [Post];
};

export type Category = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
	name: string;
	slug: string;
	posts: [Post];
	createdBy?: User;
	updatedBy?: User;
	publishedBy: User;
};

export type Comment = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
	name: string;
	email: string;
	comment: string;
	post: Post;
	createdBy?: User;
	updatedBy?: User;
	publishedBy: User;
};

export type Asset = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
	handle: string;
	fileName: string;
	width?: number;
	height?: number;
	size?: number;
	mimeType?: string;
	createdBy?: User;
	updatedBy?: User;
	publishedBy: User;
	url: string;
};
