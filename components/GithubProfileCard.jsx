import React from 'react'
import { Subheading2, Subtitle2 } from './style'

const GithubProfileCard = ({ user }) => {
	return (
		<a
			href="https://github.com/joshiprashanthd"
			target="_blank"
			className="mb-8 flex w-full flex-grow cursor-pointer flex-col rounded-lg border-2 bg-gray-50 p-4 transition duration-500 hover:shadow-lg hover:shadow-blue-200"
		>
			<div className="flex flex-col items-start sm:flex-row sm:gap-4">
				<div className="mb-4">
					<img
						src={user.avatarUrl}
						height="10px"
						width="10px"
						className="mr-4 h-[80px] w-[80px] rounded-full"
					/>
				</div>
				<div>
					<div className="mb-2">
						<Subheading2>{user.name}</Subheading2>
						<p className="font-semibold text-blue-500">{user.login}</p>
					</div>
					<Subtitle2 style="mb-2">{user.bio}</Subtitle2>
					<div>
						<span className="mr-4 text-sm font-bold">
							Followers {user.followers.totalCount}
						</span>
						<span className="text-sm font-bold">
							Repositories {user.repositories.totalCount}
						</span>
					</div>
				</div>
			</div>
		</a>
	)
}

export default GithubProfileCard
