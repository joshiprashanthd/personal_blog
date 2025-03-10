import React from 'react'
import { siteConfig } from '../../helpers/siteConfig'
import Link from 'next/link'
import { Card, CardDescription, CardTitle } from '../../components/ui/Card'

const Projects = () => {
	return (
		<section>
			<div className="mb-8 flex items-center">
				<h1 className="mb-1 pl-4 font-ui text-3xl font-semibold sm:text-4xl">
					Projects
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-primary-light dark:border-primary-dark" />
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
				{siteConfig.projects.map((repo) => (
					<Card key={repo.description}>
						<Link href={repo.url}>
							<CardTitle className="underline-offset-4 hover:underline">
								{repo.name}
							</CardTitle>
						</Link>
						<CardDescription>{repo.description}</CardDescription>
					</Card>
				))}
			</div>
		</section>
	)
}

export default Projects
