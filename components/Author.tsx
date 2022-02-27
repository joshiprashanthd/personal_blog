import Image from "next/image";
import React from "react";

const Author = ({ author }: any) => {
	return (
		<div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 pt-12 pb-8 text-center">
			<div className="absolute left-0 right-0 -top-14">
				<Image
					src={author.photo.url}
					alt={author.name}
					height="100px"
					width="100px"
					className="h-20 w-20 rounded-full object-cover "
				/>
			</div>
			<h3 className="mt-4 text-2xl font-medium ">{author.name}</h3>
			<p className="text-lg ">{author.bio}</p>
		</div>
	);
};

export default Author;
