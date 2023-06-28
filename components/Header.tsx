'use client'

import Nav from './Nav'
import SocialLinks from './SocialLinks'

const Header = () => {
	return (
		<header className="sticky top-4 mb-8 flex items-center rounded-lg bg-purple-500/50 px-4 py-4 backdrop-blur-lg">
			<div className="flex w-full items-center justify-between">
				<Nav />
				<SocialLinks />
			</div>
		</header>
	)
}

export default Header
