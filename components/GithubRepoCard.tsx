import React from 'react'
import { Repos } from '../pages/projects'

const GithubRepoCard: React.FC<{ repo: Repos['repositories']['nodes'][0] }> = ({
	repo
}) => {
	return (
		<a
			href={repo.url}
			className="b-hover b-hover-bg block rounded-md px-4 py-2 hover:shadow-md"
		>
			<h1 className="mb-1 font-semibold sm:text-lg">{repo.name}</h1>
			<p className="text-sm font-light">{repo.description}</p>
		</a>
	)
}

export default GithubRepoCard
