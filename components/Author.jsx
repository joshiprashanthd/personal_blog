import React from 'react'
import moment from 'moment'

const Author = ({ author, date }) => {
	return (
		<div className="flex items-center">
			<img
				src={author.photo.url}
				height="10px"
				width="10px"
				className="mr-4 h-10 w-10 rounded-full"
			/>
			<div>
				<p className="text-sm font-semibold">{author.name}</p>
				{date && (
					<p className="text-xs text-gray-500">
						{moment(date).format('MMM DD, YYYY')}
					</p>
				)}
			</div>
		</div>
	)
}

export default Author
