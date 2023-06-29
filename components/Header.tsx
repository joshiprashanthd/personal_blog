'use client'

import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/Dropdown'
import Nav from './Nav'
import SocialLinks from './SocialLinks'
import MenuIcon from '../icons/MenuIcon'
import { siteConfig } from '../helpers/siteConfig'

const Header = () => {
	return (
		<header className="sticky top-0 mb-12 flex items-center rounded-b-lg bg-purple-500/20 px-4 py-4 backdrop-blur-lg">
			<div className="flex w-full items-center justify-between">
				<div className='hidden sm:flex'>
					<Nav />
				</div>
				<div className='sm:hidden'>
					<DropdownMenu>
						<DropdownMenuTrigger>
								<MenuIcon />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{siteConfig.nav.links.map(item => (
								<DropdownMenuItem asChild key={item.title}>
									<Link href={item.href}>
										{item.title}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>

					</DropdownMenu>
				</div>
				<SocialLinks />
			</div>
		</header>
	)
}

export default Header
