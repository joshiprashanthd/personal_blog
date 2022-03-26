import React from 'react'
import Head from 'next/head'
import GithubProfileCard from '../../components/GithubProfileCard'
import GithubRepoCard from '../../components/GithubRepoCard'
import { Box, Grid, Heading, GridItem } from '@chakra-ui/react'

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
			<Box>
				<Heading fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }} mb={8}>
					Projects
				</Heading>
				<GithubProfileCard user={user} />
				<Heading mb={8} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
					Repositories
				</Heading>
				<Grid templateColumns="repeat(2, 1fr)" gap={4}>
					{user.repositories.nodes.map((repo) => (
						<GridItem colSpan={{ base: 2, md: 1 }}>
							<GithubRepoCard repo={repo} />
						</GridItem>
					))}
				</Grid>
			</Box>
		</>
	)
}

export default Projects
