'use client'

import MobileMenu from './MobileMenu'
import Nav from './Nav'
import SocialLinks from './SocialLinks'

const Header = () => {
	return (
		<header className="sticky top-0 z-50 mb-12 flex items-center rounded-b-lg bg-primary-light/20 px-4 py-4 backdrop-blur-lg dark:bg-primary-dark/20">
			<div className="flex w-full items-center justify-between">
				<Nav />
				<MobileMenu />
				<SocialLinks />
			</div>
		</header>
	)
}

export default Header
