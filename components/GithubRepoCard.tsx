import React from 'react'

const GithubRepoCard: React.FC<any> = ({ repo }) => {
	return (
		<a
			href={repo.url}
			className="b-hover b-hover-bg block bg-gradient-to-br px-4 py-2"
		>
			<h1 className="mb-1 origin-center text-lg font-semibold">{repo.name}</h1>
			<p className="block text-sm font-light">{repo.description}</p>
		</a>
	)
}

export default GithubRepoCard
