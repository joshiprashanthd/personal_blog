import React from 'react'
import GithubRepoCard from '../../components/GithubRepoCard'
import { siteConfig } from '../../helpers/siteConfig'

const Projects = () => {
	return (
		<section>
			<div className="mb-8 flex items-center">
				<h1 className="mb-1 pl-4 font-serif text-3xl font-semibold sm:text-4xl">
					Projects
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-purple-500" />
			</div>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
				{siteConfig.projects.map((repo) => (
					<div className="mb-4" key={repo.name}>
						<GithubRepoCard repo={repo} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects
