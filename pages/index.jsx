import Head from 'next/head'
import { PostCard } from '../components'
import {
	Flex,
	Heading,
	Text,
	useColorModeValue,
	Box,
	Image,
	Grid,
	GridItem
} from '@chakra-ui/react'
import { getRecentPosts } from '../helpers/utilities'

export async function getStaticProps() {
	const recentPosts = getRecentPosts(4)
	return {
		props: {
			posts: recentPosts
		},
		revalidate: 60 * 60 * 6
	}
}

const Home = ({ posts }) => {
	const subheadingColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<>
			<Head>
				<title>Prashant Joshi</title>
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
					{posts.map((post) => (
						<PostCard key={post.title} postSlug={post.slug}>
							<PostCard.Content p={4}>
								<Text>{post.title}</Text>
							</PostCard.Content>
						</PostCard>
					))}
				</Box>
			</Box>
		</>
	)
}

export default Home
