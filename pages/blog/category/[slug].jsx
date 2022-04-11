import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Heading, Grid, GridItem, Stack } from '@chakra-ui/react'
import { PostCard } from '../../../components'
import { getCategories, getPostsByCategory } from '../../../helpers/utilities'

export async function getStaticPaths() {
	const categories = getCategories()

	return {
		paths: categories.map((category) => ({
			params: { slug: category }
		})),
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params }) {
	const posts = await getPostsByCategory(params.slug)

	return {
		props: {
			posts: posts,
			category: `${params.slug[0].toUpperCase()}${params.slug.slice(1)}`
		},
		revalidate: 60 * 60 * 6
	}
}

const Category = ({ posts, category }) => {
	const router = useRouter()
	if (router.isFallback) return <div>Loading...</div>
	return (
		<>
			<Head>
				<title>Category: {category}</title>
			</Head>
			<Stack>
				<Heading mb={8} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
					Category: {category}
				</Heading>
				<Grid templateColumns="repeat(2, 1fr)" gap={4}>
					{posts.map((post) => (
						<GridItem colSpan={{ base: 2, md: 1 }} key={post.slug}>
							<PostCard key={post.slug} post={post.frontmatter} />
						</GridItem>
					))}
				</Grid>
			</Stack>
		</>
	)
}

export default Category
