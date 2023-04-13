import * as fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime, { ReadTimeResults } from 'reading-time'
import compareAsc from 'date-fns/compareAsc'
import { serialize } from 'next-mdx-remote/serialize'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

export type Frontmatter = {
	title: string
	slug: string
	summary: string
	image?: string
	publishedAt: string
	readingTime: ReadTimeResults
}

export type Post = {
	frontmatter: Frontmatter
	content: string
	source?: string
}

const rootDir = process.cwd()

export const getMDXPaths = (dirPath: string): string[] => {
	const filePaths = fs.readdirSync(dirPath)
	return filePaths.filter((filePath) => filePath.endsWith('.mdx'))
}

export const getMDXRawContent = (mdxPath: string): string =>
	fs.readFileSync(mdxPath, 'utf8')

export const getMDXData = (mdxPath: string): Post => {
	const rawContent = getMDXRawContent(mdxPath)
	const { data, content } = matter(rawContent)
	const time = readingTime(content)
	return {
		frontmatter: {
			...(data as Frontmatter),
			readingTime: time
		},
		content
	}
}

export const getMDXPathsRecursive = (dirPath: string): string[] => {
	const filePaths = fs.readdirSync(dirPath)
	const filePathsRecursive = filePaths.map((filePath) => {
		const filePathFull = path.join(dirPath, filePath)
		const isDirectory = fs.statSync(filePathFull).isDirectory()
		return isDirectory ? getMDXPathsRecursive(filePathFull) : filePathFull
	})
	return [].concat(...(filePathsRecursive as any))
}

export const getPosts = (limit?: number) => {
	const mdxPaths = getMDXPathsRecursive(path.join(rootDir, 'data', 'blog'))
	let mdxPosts = mdxPaths.map((mdxPath) => getMDXData(mdxPath))
	return mdxPosts
		.sort((a, b) =>
			compareAsc(
				new Date(b.frontmatter.publishedAt),
				new Date(a.frontmatter.publishedAt)
			)
		)
		.slice(0, limit)
}

const options = {
	// Use one of Shiki's packaged themes
	theme: 'one-dark-pro',
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and
		// allow empty lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }]
		}
	},
	onVisitHighlightedLine(node) {
		// Each line node by default has `class="line"`.
		node.properties.className.push('line--highlighted')
	},
	onVisitHighlightedWord(node) {
		// Each word node has no className by default.
		node.properties.className = ['word--highlighted']
	}
}

export const getPostBySlug = async (slug: string) => {
	const mdxPath = `data/blog/${slug}.mdx`
	const content = await getMDXRawContent(mdxPath)
	const post = getMDXData(mdxPath)
	const source = await serialize(content, {
		parseFrontmatter: true,
		mdxOptions: {
			remarkPlugins: [remarkGfm, remarkMath],
			rehypePlugins: [[rehypePrettyCode, options]]
		}
	})
	return {
		...post,
		source: source.compiledSource
	}
}
