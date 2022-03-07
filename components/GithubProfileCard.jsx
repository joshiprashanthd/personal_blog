import React from 'react'

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
						<h2 className="text-2xl font-semibold">{user.name}</h2>
						<p className="font-semibold text-blue-500">{user.login}</p>
					</div>
					<span className="mb-2 block">{user.bio}</span>
					<div className="">
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
