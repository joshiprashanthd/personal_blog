import moment from "moment";
import React, { useEffect, useState } from "react";
import { getComments } from "../services";

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments(slug).then((res) => setComments(res));
	}, []);

	return (
		<>
			{comments.length > 0 && (
				<div className="mb-8 p-8 pb-12">
					<h3 className="mb-8 border-b pb-4 text-xl font-semibold">
						{comments.length} Comments
					</h3>
					{comments.map((comment) => (
						<div className="mb-4 border-b border-gray-100 pb-4">
							<p className="mb-4">
								<span className="font-semibold">{comment.name}</span> /{" "}
								{moment(comment.createdAt).format("MMM DD, YYYY")}
							</p>
							<p className="w-full whitespace-pre-line text-gray-600">
								{comment.comment}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comments;
