import React from 'react'

const Heading = ({ children, style }) => {
	return (
		<h1 className={`font-heading text-4xl font-bold md:text-5xl ${style}`}>
			{children}
		</h1>
	)
}

export default Heading
