'use client'

import Nav from './Nav'
import SocialLinks from './SocialLinks'

const Header = () => {
	return (
		<header className="sticky top-4 flex items-center rounded-lg py-4 backdrop-blur-lg">
			<div className="flex w-full items-center justify-between">
				<Nav />
				<SocialLinks />
			</div>
		</header>
	)
}

export default Header
