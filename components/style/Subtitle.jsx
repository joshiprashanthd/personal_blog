import React from 'react'

const Subtitle = ({ children, style }) => {
	return <p className={`font-light md:text-lg ${style}`}>{children}</p>
}

export default Subtitle
