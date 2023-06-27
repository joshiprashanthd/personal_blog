import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import Header from '../components/Header'
import cn from '../helpers/cn'
import './global.css'
import React from 'react'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Prashant Joshi',
		template: '%s | Prashant Joshi'
	},
	description: 'Developer and creator.',
	openGraph: {
		title: 'Prashant Joshi',
		description: 'Developer and Creator.',
		url: 'https://prashantjoshi.vercel.app',
		siteName: 'Prashant Joshi',
		locale: 'en-IN',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={cn('bg-black text-white', workSans.className)}>
			<body className="container relative min-h-screen">
				<Header />
				<main className={`pb-8`}>{children}</main>
			</body>
		</html>
	)
}
