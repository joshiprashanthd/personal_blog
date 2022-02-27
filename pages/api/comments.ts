import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient, gql } from "graphql-request";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log("req body : " + req.body);
	const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT!, {
		headers: {
			authorization: "Bearer " + process.env.GRAPHCMS_TOKEN!
		}
	});

	const query = gql`
		mutation CreateComment(
			$name: String!
			$email: String!
			$slug: String!
			$comment: String!
		) {
			createComment(
				data: {
					name: $name
					email: $email
					comment: $comment
					post: { connect: { slug: $slug } }
				}
			) {
				id
			}
		}
	`;

	try {
		const result = await client.request(query, req.body);
		return res.status(200).send(result);
	} catch (error) {
		return res.status(500).send(error);
	}
}
