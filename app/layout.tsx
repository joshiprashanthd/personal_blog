import type { Metadata } from 'next'
import { Work_Sans, Noto_Sans_Mono, Outfit } from 'next/font/google'
import React from 'react'
import Header from '../components/Header'
import cn from '../helpers/cn'
import './global.css'
import {ThemeProvider} from "../components/ThemeProvider";

const outfit = Outfit({
	subsets: ['latin'],
	variable: '--font-outfit',
	weight: ['400', '500', '600'],
})

const workSans = Work_Sans({
	subsets: ['latin'],
	variable: '--font-work-sans',
	weight: ['400', '500', '600']
})

const notoSansMono = Noto_Sans_Mono({
	subsets: ['cyrillic'],
	variable: '--font-noto-sans-mono'
})

export const metadata: Metadata = {
	metadataBase: new URL("https://prashantjoshi.vercel.app"),
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
		<html
			lang="en"
			className={cn(
				workSans.variable,
				notoSansMono.variable,
				outfit.variable,
			)}
		>
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
					rel="stylesheet"
				></link>
			</head>
			<body className="container relative min-h-screen">
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
			>
				<Header />
				<main className={cn(`pb-8`)}>{children}</main>
			</ThemeProvider>
			</body>
		</html>
	)
}
