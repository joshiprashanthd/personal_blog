import React from 'react'

const Subtitle = ({ children, style }) => {
	return <p className={`text-gray-500 md:text-lg ${style}`}>{children}</p>
}

export default Subtitle
