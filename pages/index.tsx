import Head from 'next/head'
import React from 'react'

export async function getStaticProps() {
	return {
		props: {}
	}
}

const Home = () => {
	return (
		<>
			<Head>
				<title>Prashant Joshi</title>
			</Head>
			<div className="flex flex-col items-center justify-center">
				<img src="/profile.jfif" className="mb-4 h-40 w-40 rounded-full" />
				<span className="mb-4 block font-serif text-4xl font-semibold">
					Prashant Joshi
				</span>
				<span className="mb-8 w-96 text-center text-lg font-light">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
					impedit aspernatur inventore maxime distinctio veniam laudantium!
					Cupiditate, hic officiis perspiciatis omnis commodi, similique rem
					adipisci voluptatum aperiam accusantium quos tempore?
				</span>
				<div className="flex w-full items-center justify-center space-x-8">
					<a
						className="b-hover flex min-w-max items-center bg-gray-200 px-4 py-2 font-medium text-black"
						href="https://twitter.com/jprashanthd"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
							className="mr-2 inline h-6 w-6"
						/>
						Connect on twitter
					</a>
					<a
						className="b-hover flex min-w-max items-center bg-gray-200 px-4 py-2 font-medium text-black"
						href="https://github.com/joshiprashanthd"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715"
							className="mr-2 inline h-6 w-6"
						/>
						Connect on github
					</a>
				</div>
			</div>
		</>
	)
}

export default Home
