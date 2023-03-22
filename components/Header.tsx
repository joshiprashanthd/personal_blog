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
							<div className="relative h-max w-max">
								<p
									className={clsx(
										'cursor-pointer px-4 py-1 font-serif text-lg font-medium tracking-tight '
									)}
								>
									{route.name}
								</p>
								<div
									className={clsx(
										'absolute inset-0 -z-10 h-full w-full origin-center rounded-md transition duration-100',
										{
											'translate-y-[0px] scale-100 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100':
												isActive,
											'scale-50 opacity-0': !isActive
										}
									)}
								/>
							</div>
						</NextLink>
					)
				})}
			</div>
		</nav>
	)
}

export default Header
