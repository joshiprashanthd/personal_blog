import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import clsx from 'clsx'

const Header = () => {
	const router = useRouter()
	const path = router.pathname

	const routes = [
		{
			href: '/',
			name: 'home'
		},
		{
			href: '/projects',
			name: 'projects'
		},
		{
			href: '/blog',
			name: 'blog'
		}
	]
	return (
		<nav className="sticky mb-8 mt-8 ml-auto p-4 font-serif">
			<div className="flex justify-center space-x-12 ">
				{routes.map((route) => {
					const isActive = path === route.href
					return (
						<NextLink href={route.href} key={route.href}>
							<span
								className={clsx(
									'b-hover b-hover-bg inline-block cursor-pointer px-4 py-1 font-serif text-lg font-medium tracking-tight ',
									{
										'b-text-gradient scale-110 font-bold': isActive
									}
								)}
							>
								{route.name}
							</span>
						</NextLink>
					)
				})}
			</div>
		</nav>
	)
}

export default Header
