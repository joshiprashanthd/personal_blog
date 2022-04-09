import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Text, Heading, useColorModeValue, Stack, Flex } from '@chakra-ui/react'
import { SimilarPosts } from '../../../components'
import MDXComponents from '../../../components/MDXComponents'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import {
	getSimilarPosts,
	getMDXPaths,
	getMDXRawContent
} from '../../../helpers/utilities'

import { format } from 'date-fns'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import readingTime from 'reading-time'

export async function getStaticPaths() {
	const paths = (await getMDXPaths('data/blog')).map((path) => ({
		params: { slug: path.replace('.mdx', '') }
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const content = await getMDXRawContent(`data/blog/${params.slug}.mdx`)
	const source = await serialize(content, {
		parseFrontmatter: true,
		mdxOptions: {
			remarkPlugins: [remarkGfm, remarkMath]
		}
	})
	const similarPosts = await getSimilarPosts(params.slug)
	return {
		props: {
			frontmatter: {
				...source.frontmatter,
				readingTime: readingTime(content).text
			},
			source: source.compiledSource,
			similarPosts
		}
	}
}

const PostDetails = ({ frontmatter, source, similarPosts }) => {
	const router = useRouter()
	if (router.isFallback) return <div> Loading... </div>

	const subheadingColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<>
			<Head>
				<title>{frontmatter.title}</title>
			</Head>
			<Stack mb={16}>
				<Text color="blue.400" mb={2} fontWeight="bold">
					{frontmatter.category}
				</Text>
				<Heading fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
					{frontmatter.title}
				</Heading>
				<Flex mb={8}>
					<Text color={subheadingColor} mr={2}>
						{format(new Date(frontmatter.publishedAt), 'MMM d, yyyy')}
					</Text>
					{' • '}
					<Text color={subheadingColor} ml={2}>
						{frontmatter.readingTime}
					</Text>
				</Flex>
				<MDXRemote compiledSource={source} components={MDXComponents} />
			</Stack>
			<SimilarPosts posts={similarPosts} />
		</>
	)
}

export default PostDetails
