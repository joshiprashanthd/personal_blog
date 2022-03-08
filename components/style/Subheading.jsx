import React from 'react'

const Subheading = ({ children, style }) => {
	return (
		<h2 className={`font-heading text-3xl font-bold md:text-4xl ${style}`}>
			{children}
		</h2>
	)
}

export default Subheading
