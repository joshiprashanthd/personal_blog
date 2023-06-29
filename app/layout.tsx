import type { Metadata } from 'next'
import { Work_Sans, Noto_Sans_Mono, Prata } from 'next/font/google'
import React from 'react'
import Header from '../components/Header'
import cn from '../helpers/cn'
import './global.css'

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans', weight: ['400', '500'] })
const notoSansMono = Noto_Sans_Mono({
	subsets: ['cyrillic'],
	variable: '--font-noto-sans-mono'
})

const prataSerif = Prata({
	weight: '400',
	subsets: ['latin'],
	variable: "--font-prata-serif"
})

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
	console.log(workSans.className)
	return (
		<html
			lang="en"
			className={cn(
				'bg-black text-white',
				workSans.variable,
				notoSansMono.variable,
				prataSerif.variable,
			)}
		>
			<body className="container relative min-h-screen">
				<Header />
				<main className={`pb-8`}>{children}</main>
			</body>
		</html>
	)
}
