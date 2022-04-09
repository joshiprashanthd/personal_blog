import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'
import readingTime from 'reading-time'
import compareAsc from 'date-fns/compareAsc'

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

export const getMDXData = (mdxPath) => {
	const rawContent = getMDXRawContent(mdxPath)
	const { data, content } = matter(rawContent)
	const time = readingTime(content)
	return {
		frontmatter: { ...data, readingTime: time },
		content
	}
}

export const getRecentPosts = (limit) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const mdxPosts = mdxPaths.map((mdxPath) => getMDXData(mdxPath))
	return mdxPosts
		.sort((a, b) =>
			compareAsc(new Date(b.publishedAt), new Date(a.publishedAt))
		)
		.slice(0, limit)
}

export const getPostsByCategory = (category, limit) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const mdxPosts = mdxPaths.map((mdxPath) => getMDXData(mdxPath))

	return mdxPosts
		.filter(
			(mdxPost) => mdxPost.frontmatter.category.toLowerCase() === category
		)
		.sort((a, b) =>
			compareAsc(
				new Date(b.frontmatter.publishedAt),
				new Date(a.frontmatter.publishedAt)
			)
		)
		.slice(0, limit)
}

export const getCategories = () => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const categories = mdxPaths.map((mdxPath) => {
		const mdxRawContent = getMDXRawContent(mdxPath)
		const mdxMatter = matter(mdxRawContent)
		return mdxMatter.data.category
	})
	return [...new Set(categories)]
}

export const getPosts = (limit) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const mdxPosts = mdxPaths.map((mdxPath) => getMDXData(mdxPath))
	return mdxPosts
		.sort((a, b) =>
			compareAsc(
				new Date(b.frontmatter.publishedAt),
				new Date(a.frontmatter.publishedAt)
			)
		)
		.slice(0, limit)
}

export const getPostBySlug = (slug) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const paths = mdxPaths.filter((mdxPath) => mdxPath.includes(slug))
	if (paths.length === 0) return null
	const mdxPath = paths[0]
	return getMDXData(mdxPath)
}

export const searchPosts = (query) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const mdxPosts = mdxPaths.map((mdxPath) => getMDXData(mdxPath))

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

export const getSimilarPosts = (slug) => {
	const mdxPaths = getMDXPathsRecursive('data/blog')
	const mdxPost = getPostBySlug(slug)

	if (!mdxPost) {
		return []
	}

	const {
		frontmatter: { category, title }
	} = mdxPost

	const mdxPosts = mdxPaths.map((mdxPath) => getMDXData(mdxPath))
	return mdxPosts
		.filter(
			(mdxPost) =>
				mdxPost.frontmatter.category === category &&
				mdxPost.frontmatter.title != title
		)
		.sort((a, b) =>
			compareAsc(
				new Date(b.frontmatter.publishedAt),
				new Date(a.frontmatter.publishedAt)
			)
		)
		.slice(0, 3)
}
