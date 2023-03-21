import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import GithubRepoCard from '../../components/GithubRepoCard'

export type Repos = {
	repositories: {
		totalCount: number
		nodes: {
			name: string
			description: string
			url: string
			repositoryTopics: {
				nodes: {
					topic: {
						name: string
					}
				}[]
			}
			primaryLanguage: {
				name: string
			}
		}[]
	}
}

export type User = {
	avatar_url: string
	username: string
	name: string
	url: string
	bio: string
	followers: number
	following: number
	location: string
}

export async function getStaticProps() {
	const repos: Repos = {
		repositories: {
			totalCount: 7,
			nodes: [
				{
					name: 'pygame-projects',
					description:
						'Created games like Game Of Life and The Breakout and A-Star Shortest Path Algorithm Simulation.',
					url: 'https://github.com/joshiprashanthd/pygame-projects',
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
						'Implemented various research papers related to Generative Adversarial Networks using Tensorflow',
					url: 'https://github.com/joshiprashanthd/gans',
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
	return {
		props: {
			repos
		}
	}
}

const Projects: NextPage<{ repos: Repos }> = ({ repos }) => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<div className="mb-8 flex items-center">
				<h1 className="mb-1 pl-4 font-serif text-4xl font-semibold">
					Projects
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-gray-500" />
			</div>
			<div className="grid grid-cols-2 gap-2">
				{repos.repositories.nodes.map((repo) => (
					<div className="mb-4" key={repo.name}>
						<GithubRepoCard repo={repo} />
					</div>
				))}
			</div>
		</>
	)
}

export default Projects
