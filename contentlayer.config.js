import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

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
			url: `https://prashantjoshi.vercel.app/blog/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Prashant Joshi'
			}
		})
	}
}

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
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
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [
			rehypeKatex,
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: {
						dark: "github-dark-dimmed",
						light: "github-light",
					},
					keepBackground: false,
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted')
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted']
					}
				}
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor']
					}
				}
			]
		]
	}
})
