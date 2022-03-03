import React from 'react'
import Head from 'next/head'
// import client from '../../services/apollo_client'
import { gql, GraphQLClient } from 'graphql-request'

// fetch all repositories from github graphql api using github access token stores in enviroment variables
// using graphql request library
const data = {
	bio: 'Deep Learning and Algorithms Enthusiast.\r\nLove to create and learn new things.',
	avatarUrl:
		'https://avatars.githubusercontent.com/u/58854114?u=67a7fc01d72eae37dcde7ed3ea2c2d06292c8522&v=4',
	email: '',
	name: 'Prashant Joshi',
	login: 'joshiprashanthd',
	url: 'https://github.com/joshiprashanthd',
	followers: { totalCount: 11 },
	repositories: {
		totalCount: 7,
		nodes: [
			{
				name: 'pygame-projects',
				description:
					'Created games like Game Of Life and The Breakout and A-Star Shortest Path Algorithm Simulation.',
				url: 'https://github.com/joshiprashanthd/pygame-projects',
				stargazerCount: 6,
				repositoryTopics: {
					nodes: [
						{ topic: { name: 'pygame' } },
						{ topic: { name: 'simulation' } },
						{ topic: { name: 'game' } }
					]
				},
				primaryLanguage: { name: 'Python' }
			},
			{
				name: 'algorithms',
				description:
					'Implementation of 16 most used graph algorithms from scratch',
				url: 'https://github.com/joshiprashanthd/algorithms',
				stargazerCount: 6,
				repositoryTopics: {
					nodes: [
						{ topic: { name: 'algorithm' } },
						{ topic: { name: 'graph' } }
					]
				},
				primaryLanguage: { name: 'Python' }
			},
			{
				name: 'neural_network',
				description:
					'Implementation of Keras like deep learning library from scratch',
				url: 'https://github.com/joshiprashanthd/neural_network',
				stargazerCount: 6,
				repositoryTopics: {
					nodes: [
						{ topic: { name: 'deep-learning' } },
						{ topic: { name: 'keras' } }
					]
				},
				primaryLanguage: { name: 'Python' }
			},
			{
				name: 'flutter-task-management-app',
				description:
					'Fully functional Task Management App with local storage and notifications support.',
				url: 'https://github.com/joshiprashanthd/flutter-task-management-app',
				stargazerCount: 4,
				repositoryTopics: {
					nodes: [
						{ topic: { name: 'flutter' } },
						{ topic: { name: 'android' } }
					]
				},
				primaryLanguage: { name: 'Dart' }
			},
			{
				name: 'gans',
				description:
					'Implemented various research papers of topic Generative Adversarial Networks using Tensorflow',
				url: 'https://github.com/joshiprashanthd/gans',
				stargazerCount: 0,
				repositoryTopics: {
					nodes: [
						{ topic: { name: 'tensorflow' } },
						{ topic: { name: 'gan' } },
						{ topic: { name: 'research' } }
					]
				},
				primaryLanguage: { name: 'Python' }
			}
		]
	}
}

export async function getStaticProps() {
	// const client = new GraphQLClient('https://api.github.com/graphql', {
	// 	headers: {
	// 		authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
	// 	}
	// })
	// const data = await client.request(
	// 	gql`
	// 		query {
	// 			user(login: "joshiprashanthd") {
	// 				bio
	// 				avatarUrl
	// 				email
	// 				name
	// 				login
	// 				url
	// 				followers {
	// 					totalCount
	// 				}
	// 				repositories(
	// 					orderBy: { field: STARGAZERS, direction: DESC }
	// 					first: 10
	// 					privacy: PUBLIC
	// 					isFork: false
	// 				) {
	// 					totalCount
	// 					nodes {
	// 						name
	// 						description
	// 						url
	// 						stargazerCount
	// 						repositoryTopics(first: 10) {
	// 							nodes {
	// 								topic {
	// 									name
	// 								}
	// 							}
	// 						}
	// 						primaryLanguage {
	// 							name
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`,
	// 	{
	// 		headers: {
	// 			Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`
	// 		}
	// 	}
	// )

	return {
		props: {
			user: data
		},
		revalidate: 60 * 60 * 24
	}
}

const Projects = ({ user }) => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<div>
				<h1 className="mb-8 font-heading text-4xl font-bold md:text-5xl">
					Projects
				</h1>
				<div className="mb-8 flex w-full flex-grow cursor-pointer flex-col rounded-lg border-2 bg-gray-50 p-4 transition duration-500 hover:shadow-lg hover:shadow-blue-200">
					<div className="flex flex-col items-start sm:flex-row sm:gap-4">
						<div className="mb-4">
							<img
								src={user.avatarUrl}
								height="10px"
								width="10px"
								className="mr-4 h-[80px] w-[80px] rounded-full"
							/>
						</div>
						<div>
							<div className="mb-2">
								<h2 className="text-2xl font-semibold">{user.name}</h2>
								<p className="font-semibold text-blue-500">{user.login}</p>
							</div>
							<span className="mb-2 block">{user.bio}</span>
							<div className="">
								<span className="mr-4 text-sm font-bold">
									Followers {user.followers.totalCount}
								</span>
								<span className="text-sm font-bold">
									Repositories {user.repositories.totalCount}
								</span>
							</div>
						</div>
					</div>
				</div>
				<h1 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
					Repositories
				</h1>
				<div className="grid grid-cols-2 gap-4">
					{user.repositories.nodes.map((repo) => (
						<div className="col-span-2 sm:col-span-1" key={repo.name}>
							<div className="flex w-full flex-grow cursor-pointer flex-col rounded-lg border-2 bg-gray-50 p-4 transition duration-500 hover:shadow-lg hover:shadow-blue-200">
								<div className="flex items-center justify-start">
									<h2 className="mb-1 grow text-xl font-medium">{repo.name}</h2>
									<span className="flex items-center text-sm font-bold text-gray-600">
										<svg
											className="mr-1 inline h-5 w-5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
												clipRule="evenodd"
											/>
										</svg>
										{repo.stargazerCount}
									</span>
								</div>
								<span className="mb-2 block text-sm font-semibold text-blue-500">
									<span className="font-normal text-gray-500">written in </span>
									{repo.primaryLanguage.name}
								</span>
								<p className="mb-2">{repo.description}</p>
								<div className="mb-2 flex flex-wrap gap-2">
									{repo.repositoryTopics.nodes.map((topic) => (
										<span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-500">
											{topic.topic.name}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Projects
