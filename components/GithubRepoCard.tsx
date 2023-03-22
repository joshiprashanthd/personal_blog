import React from 'react'
import { Repos } from '../pages/projects'

const GithubRepoCard: React.FC<{ repo: Repos['repositories']['nodes'][0] }> = ({
	repo
}) => {
	return (
		<a
			href={repo.url}
			className="b-hover b-hover-bg block rounded-md bg-gradient-to-br px-4 py-2 hover:shadow-md"
		>
			<h1 className="mb-1 origin-center text-lg font-semibold">{repo.name}</h1>
			<p className="block text-sm font-light">{repo.description}</p>
		</a>
	)
}

export default GithubRepoCard
