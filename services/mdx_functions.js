import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'

export const getMDXPaths = (dirPath) => {
	const filePaths = fs.readdirSync(dirPath)
	return filePaths.filter((filePath) => filePath.endsWith('.mdx'))
}

export const getMDXPathsRecursive = (dirPath) => {
	const filePaths = fs.readdirSync(dirPath)
	const filePathsRecursive = filePaths.map((filePath) => {
		const filePathFull = path.join(dirPath, filePath)
		const isDirectory = fs.statSync(filePathFull).isDirectory()
		return isDirectory ? getMDXPathsRecursive(filePathFull) : filePathFull
	})
	return [].concat(...filePathsRecursive)
}

export const getMDXRawContent = (mdxPath) => fs.readFileSync(mdxPath, 'utf8')

export const getRecentPosts = (mdxPaths, limit) => {
	const mdxPosts = mdxPaths.map((mdxPath) => {
		const mdxRawContent = getMDXRawContent(mdxPath)
		const mdxMatter = matter(mdxRawContent)
		return {
			frontmatter: mdxMatter.data,
			body: mdxMatter.content
		}
	})
	return mdxPosts.sort((a, b) => b.publishedAt - a.publishedAt).slice(0, limit)
}

export const getPostsByCategory = (category, limit) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const mdxPosts = mdxPaths.map((mdxPath) => {
		const mdxRawContent = getMDXRawContent(mdxPath)
		const mdxMatter = matter(mdxRawContent)
		return {
			frontmatter: mdxMatter.data,
			body: mdxMatter.content
		}
	})
	return mdxPosts
		.filter((mdxPost) => mdxPost.category === category)
		.sort((a, b) => b.publishedAt - a.publishedAt)
		.slice(0, limit)
}

export const getCategories = (mdxPaths) => {
	const categories = mdxPaths.map((mdxPath) => {
		const mdxRawContent = getMDXRawContent(mdxPath)
		const mdxMatter = matter(mdxRawContent)
		return mdxMatter.data.category
	})
	return [...new Set(categories)]
}

// path contains slug
export const getPostBySlug = (slug, mdxPaths) => {
	const paths = mdxPaths.filter((mdxPath) => mdxPath.includes(slug))
	if (paths.length === 0) {
		return null
	}
	const mdxPath = paths[0]
	const mdxRawContent = getMDXRawContent(mdxPath)
	const mdxMatter = matter(mdxRawContent)
	return {
		frontmatter: mdxMatter.data,
		body: mdxMatter.content
	}
}

export const searchPosts = (query, mdxPaths) => {
	const mdxPosts = mdxPaths.map((mdxPath) => {
		const mdxRawContent = getMDXRawContent(mdxPath)
		const mdxMatter = matter(mdxRawContent)
		return {
			frontmatter: mdxMatter.data,
			body: mdxMatter.content
		}
	})
	return mdxPosts.filter((mdxPost) => {
		const {
			frontmatter: { title, summary },
			body
		} = mdxPost
		return (
			title.toLowerCase().includes(query.toLowerCase()) ||
			summary.toLowerCase().includes(query.toLowerCase()) ||
			body.toLowerCase().includes(query.toLowerCase())
		)
	})
}
