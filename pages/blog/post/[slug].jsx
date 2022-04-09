import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
	Text,
	Heading,
	Box,
	useColorModeValue,
	Stack,
	Flex
} from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import {
	getSimilarPosts,
	getMDXPaths,
	getMDXRawContent
} from '../../../helpers/utilities'
import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import { format } from 'date-fns'
import Tex from '@matejmazur/react-katex'
import remarkMath from 'remark-math'
import { SimilarPosts } from '../../../components'
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
						{format(new Date(frontmatter.publishedAt), 'MMMM dd, yyyy')}
					</Text>
					{' • '}
					<Text color={subheadingColor} ml={2}>
						{frontmatter.readingTime}
					</Text>
				</Flex>
				<MDXRemote
					compiledSource={source}
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
									bg={inlineCodeBgColor}
									color={inlineCodeColor}
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
			</Stack>
			<SimilarPosts posts={similarPosts} />
		</>
	)
}

export default PostDetails
