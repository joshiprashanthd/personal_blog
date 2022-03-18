import { gql } from '@apollo/client'
import Head from 'next/head'
import { PostCard } from '../components'
import { Heading, Subheading, Subtitle } from '../components/style'
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
	return (
		<>
			<Head>
				<title>Jastor J - Developer</title>
			</Head>
			<div className="mx-auto flex max-w-3xl flex-col">
				<div className="mb-8 flex flex-col-reverse items-start sm:flex-row">
					<div className="flex flex-col text-left sm:pr-16">
						<Heading style="mb-4">Prashant Joshi</Heading>
						<Subtitle>
							I am a self-taught developer. Passionate about machine learning
							and web development.
						</Subtitle>
					</div>
					<div>
						<img
							src="https://picsum.photos/200/300"
							height={128}
							width={128}
							className="mx-auto mb-8 max-h-[100px] max-w-[100px] rounded-full object-cover sm:mb-0 sm:max-h-[128px] sm:max-w-[128px]"
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<Subheading style="mb-8">Recent Posts</Subheading>
					<div className="flex flex-col gap-4 sm:flex-row">
						{posts.map((post) => (
							<div className="basis-1/2">
								<PostCard post={post} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
