'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from '../helpers/cn'
import { siteConfig } from '../helpers/siteConfig'

const Nav = () => {
	const pathname = usePathname()
	return (
		<nav>
			<div className="flex flex-1 justify-center gap-8">
				{siteConfig.nav.links.map((route) => {
					const isActive = pathname === route.href
					return (
						<Link
							href={route.href}
							key={route.href}
							className={cn(
								'cursor-pointer tracking-tight',
								isActive && 'font-medium text-purple-500'
							)}
						>
							{route.title}
						</Link>
					)
				})}
			</div>
		</nav>
	)
}

export default Nav
