import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
	const router = useRouter()
	const path = router.pathname

	const routes = [
		{
			href: '/',
			name: 'Home'
		},
		{
			href: '/projects',
			name: 'Projects'
		},
		{
			href: '/blog',
			name: 'Blog'
		}
	]

	return (
		<div className="container mx-auto mb-4 flex justify-center">
			<div className="flex gap-8 py-8">
				{routes.map((route) => (
					<Link href={route.href} key={route.href}>
						<span
							className={`cursor-pointer rounded-md px-4 py-2 hover:bg-gray-50 ${
								path == route.href && 'font-semibold text-blue-600'
							}`}
						>
							{' '}
							{route.name}{' '}
						</span>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Header
