import { gql } from '@apollo/client'
import Head from 'next/head'
import Image from 'next/image'
import RecentPostCard from '../components/RecentPostCard'
import client from '../services/apollo_client'

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
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
	})

	return {
		props: {
			posts: data.posts
		}
	}
}

const Home = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Jastor J - Developer</title>
			</Head>
			<div className="mx-auto flex max-w-3xl flex-col pb-16">
				<div className="mb-8 flex flex-col-reverse items-center sm:flex-row sm:items-start">
					<div className="flex flex-col text-center sm:pr-16 sm:text-left">
						<h1 className="mb-4 text-4xl font-bold md:text-5xl">
							Prashant Joshi
						</h1>
						<p className="font-light md:text-lg">
							Part Time Developer. Part Time Reader. Love to explore new
							technology. I am a self taught developer and a self taught reader.
						</p>
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
					<h1 className="mb-8 text-3xl font-bold md:text-4xl">Recent Posts</h1>
					<div className="flex flex-col gap-8 sm:flex-row">
						{posts.map((post) => (
							<RecentPostCard post={post} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
