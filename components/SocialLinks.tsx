import React from 'react'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'

export default function SocialLinks() {
	return (
		<div className="flex gap-4">
			<a
				href="https://www.github.com/joshiprashanthd"
				target="_blank"
				className="rounded-md bg-purple-400/20 p-1.5 shadow-sm"
			>
				<GithubIcon />
			</a>
			<a
				href="https://twitter.com/prashantjoshi09"
				target="_blank"
				className="rounded-md bg-purple-400/20 p-1.5 shadow-sm"
			>
				<TwitterIcon />
			</a>
		</div>
	)
}
