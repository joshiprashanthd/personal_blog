import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath
	},
	url: {
		type: 'string',
		resolve: (post) => `/blog/${post._raw.flattenedPath}`
	},
	structuredData: {
		type: 'json',
		resolve: (doc) => ({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: doc.title,
			datePublished: doc.publishedAt,
			dateModified: doc.publishedAt,
			description: doc.summary,
			image: doc.image
				? `https://leerob.io${doc.image}`
				: `https://leerob.io/api/og?title=${doc.title}`,
			url: `https://leerob.io/blog/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Lee Robinson'
			}
		})
	}
}

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `./data/blog/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		summary: { type: 'string', required: true },
		imageUrl: { type: 'string' },
		publishedAt: { type: 'date', required: true }
	},
	computedFields
}))

export default makeSource({
	contentDirPath: 'data/blog',
	documentTypes: [Post]
})
