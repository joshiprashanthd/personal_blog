import React from 'react'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'

export default function SocialLinks() {
	return <div className="flex gap-4"> 
		<a href="https://www.github.com/joshiprashanthd" target='_blank'>
		<GithubIcon />
		</a>
		<a href="https://twitter.com/prashantjoshi09" target="_blank">
		<TwitterIcon />	
		</a>
	</div>
}
