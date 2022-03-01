import Head from 'next/head'
import React from 'react'

const ErrorPage = () => {
	return (
		<>
			<Head>
				<title>404 Not Found</title>
			</Head>

			<div className="flex  flex-col items-center justify-center pb-16">
				<h1 className="mb-4 text-4xl font-bold md:text-5xl">
					Still in development...
				</h1>
				<p>Don't be curious about this...</p>
			</div>
		</>
	)
}

export default ErrorPage
