import React from 'react'
import { Header, Footer } from '.'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="mx-auto flex max-w-3xl flex-col justify-center px-8">
				{children}
				<Footer />
			</main>
		</>
	)
}
export default Layout
