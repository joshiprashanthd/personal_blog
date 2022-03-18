import React from 'react'
import Head from 'next/head'
import GithubProfileCard from '../../components/GithubProfileCard'
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
				<GithubProfileCard user={user} />
				<h1 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
					Repositories
				</h1>
				<div className="grid grid-cols-2 gap-4">
					{user.repositories.nodes.map((repo) => (
						<GithubRepoCard repo={repo} />
					))}
				</div>
			</div>
		</>
	)
}

export default Projects
