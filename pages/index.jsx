import { gql } from '@apollo/client'
import Head from 'next/head'
import { PostCard } from '../components'
import {
	Flex,
	Heading,
	Text,
	useColorModeValue,
	Box,
	Image
} from '@chakra-ui/react'
import client from '../services/apollo_client'

const recentPostsQuery = gql`
	query GetPostDetails {
		posts(orderBy: createdAt_ASC, last: 2) {
			title
			featuredImage {
				url
			}
			createdAt
			slug
			excerpt
			author {
				name
				photo {
					url
				}
			}
		}
	}
`

export async function getStaticProps() {
	const { data } = await client.query({
		query: recentPostsQuery
	})

	return {
		props: {
			posts: data.posts
		},
		revalidate: 60 * 60 * 6
	}
}

const Home = ({ posts }) => {
	const subheadingColor = useColorModeValue('gray.600', 'gray.500')

	return (
		<>
			<Head>
				<title>Jastor J - Developer</title>
			</Head>
			<Box>
				<Flex
					direction={{ base: 'column-reverse', sm: 'row' }}
					mb={8}
					align="start"
				>
					<Flex flexDirection="column" pr={{ base: null, sm: 16 }}>
						<Heading fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }} mb={2}>
							Prashant Joshi
						</Heading>
						<Text color={subheadingColor}>
							I am a self-taught developer. Passionate about machine learning
							and web development.
						</Text>
					</Flex>
					<Box>
						<Image
							src="https://picsum.photos/200/300"
							height={128}
							width={128}
							rounded="full"
							objectFit="cover"
							alt="Prashant Joshi"
							maxH={{ base: '80px', sm: '100px', md: '128px' }}
							maxW={{ base: '80px', sm: '100px', md: '128px' }}
							mb={{ base: 4, sm: null }}
						/>
					</Box>
				</Flex>
				<Box>
					<Heading mb={8} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
						Recent Posts
					</Heading>
					<Flex flexDirection={{ base: 'column', sm: 'row' }} gap={4}>
						{posts.map((post) => (
							<Box flexBasis={{ base: '100%', md: '50%' }}>
								<PostCard post={post} />
							</Box>
						))}
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default Home
