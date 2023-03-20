import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import GithubRepoCard from '../../components/GithubRepoCard'

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

export async function getStaticProps() {
	return {
		props: {
			user: data
		}
	}
}

const Projects: NextPage<{ user: typeof data }> = ({ user }) => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<div className="grid grid-cols-8 gap-8">
				<div className="col-span-6 ">
					<span className="mb-8 block pl-4 font-serif text-4xl font-semibold">
						Projects
					</span>
					{user.repositories.nodes.map((repo) => (
						<div className="mb-4" key={repo.name}>
							<GithubRepoCard repo={repo} />
						</div>
					))}
				</div>
				<div className="col-span-2 flex flex-col items-center ">
					<img src={user.avatarUrl} className="mb-4 h-36 w-36 rounded-full" />
					<span className="mb-4 block text-lg font-light">@{user.login}</span>
				</div>
			</div>
		</>
	)
}

export default Projects
