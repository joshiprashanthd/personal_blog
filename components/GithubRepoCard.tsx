import React from 'react'
import { Project } from '../helpers/types'

const GithubRepoCard = ({ repo }: { repo: Project }) => {
	return (
		<a
			href={repo.url}
			className="group block rounded-md px-4 py-2 transition-all hover:-translate-y-1 hover:bg-purple-500/20"
		>
			<h1 className="mb-1 font-semibold group-hover:text-purple-400 sm:text-lg">
				{repo.name}
			</h1>
			<p className="text-sm font-light">{repo.description}</p>
		</a>
	)
}

export default GithubRepoCard
