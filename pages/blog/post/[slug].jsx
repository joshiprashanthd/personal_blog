import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Text, Heading, Flex, Box, useColorModeValue } from '@chakra-ui/react'

import Tex from '@matejmazur/react-katex'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

export async function getStaticPaths() {
	const posts = await fs.readdirSync(path.join('data', 'posts'))

	return {
		paths: posts.map((post) => ({
			params: { slug: post.replace(/\.mdx/, '') }
		})),
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const source = fs.readFileSync(
		path.join('data', 'posts', `${params.slug}.mdx`),
		'utf8'
	)

	const { data, content } = matter(source)

	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
			remarkPlugins: [remarkGfm]
		}
	})

	return {
		props: {
			source: mdxSource,
			data
		}
	}
}

const PostDetails = ({ source, data }) => {
	const router = useRouter()
	if (router.isFallback) return <div> Loading... </div>

	const subheadingColor = useColorModeValue('gray.600', 'gray.400')
	const topicBgColor = useColorModeValue('blue.50', 'blue.900')

	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Box>
				<Box>
					<Heading mb={1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
						{data.title}
					</Heading>
					<Text mb={4} color={subheadingColor}>
						{data.excerpt}
					</Text>
					<Flex flexWrap mb={8} gap={2}>
						{data.tag.map((category) => (
							<Box bg={topicBgColor} py={1} px={2} rounded="full">
								<Text color="blue.300" fontWeight="semibold" fontSize="sm">
									{category}
								</Text>
							</Box>
						))}
					</Flex>
				</Box>
				<MDXRemote
					{...source}
					components={{
						h1: (props) => <Heading as="h1" size="xl" mb={4} {...props} />,
						h2: (props) => <Heading as="h2" size="lg" mb={4} {...props} />,
						h3: (props) => <Heading as="h3" size="md" mb={4} {...props} />,
						h4: (props) => <Heading as="h4" size="sm" mb={4} {...props} />,
						h5: (props) => <Heading as="h5" size="xs" mb={4} {...props} />,
						h6: (props) => <Heading as="h6" size="xs" mb={4} {...props} />,
						p: (props) => <Text as="p" mb={4} {...props} lineHeight="7" />,
						ul: (props) => (
							<Box
								as="ul"
								mb={4}
								{...props}
								listStylePosition="inside"
								pl={4}
							/>
						),
						ol: (props) => (
							<Box
								as="ol"
								mb={4}
								{...props}
								listStylePosition="inside"
								pl={4}
							/>
						),
						li: (props) => <Text as="li" mb={4} {...props} />,
						div: (props) => {
							if (props.className.includes('math-display')) {
								import('katex/dist/katex.min.css')
								return <Tex block math={props.children} />
							}

							return <div {...props} />
						},
						span: (props) => {
							if (props.className.includes('math-inline')) {
								import('katex/dist/katex.min.css')
								return <Tex math={props.children} />
							}

							return <span {...props} />
						},
						code: (props) => {
							const inlineCodeBgColor = useColorModeValue(
								'gray.200',
								'gray.700'
							)
							const inlineCodeColor = useColorModeValue('gray.800', 'gray.300')

							if (!props.className) {
								return (
									<Box
										as="span"
										display="inline-block"
										children={props.children}
										rounded="lg"
										color={inlineCodeColor}
										bg={inlineCodeBgColor}
										px={1}
										fontFamily="mono"
										fontSize="md"
									/>
								)
							}
							return (
								<Box
									as="pre"
									{...props}
									rounded="lg"
									bg="gray.900"
									p={4}
									mb={4}
									fontSize="md"
									overflow="auto"
								/>
							)
						},
						NextImage: (props) => <Image {...props} />
					}}
				/>
			</Box>
		</>
	)
}

export default PostDetails
