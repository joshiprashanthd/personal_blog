import React from 'react'
import { Subheading2 } from './style'

const GithubRepoCard = ({ repo }) => {
	return (
		<a href={repo.url} className="col-span-2 sm:col-span-1" key={repo.name}>
			<div className="cursor-pointer rounded-lg border-2 bg-gray-50 p-4 transition duration-500 hover:shadow-lg hover:shadow-blue-200">
				<Subheading2 style="mb-2">{repo.name}</Subheading2>
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
		</a>
	)
}

export default GithubRepoCard
