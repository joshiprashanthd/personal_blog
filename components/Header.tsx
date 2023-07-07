'use client'

import MobileMenu from './MobileMenu'
import Nav from './Nav'
import SocialLinks from './SocialLinks'

const Header = () => {
	return (
		<header className="sticky top-0 mb-12 flex items-center rounded-b-lg bg-primary/20 px-4 py-4 backdrop-blur-lg">
			<div className="flex w-full items-center justify-between">
				<Nav />
				<MobileMenu />
				<SocialLinks />
			</div>
		</header>
	)
}

export default Header
