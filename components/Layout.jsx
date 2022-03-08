import React from 'react'
import { Header, Footer } from '.'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="mx-auto flex max-w-3xl flex-col justify-center px-8 sm:px-4">
				<div className="pb-16">{children}</div>
				<Footer />
			</main>
		</>
	)
}
export default Layout
