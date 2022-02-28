import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Categories = ({}) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data));
	}, []);

	return (
		<div className="md:contents">
			<h2 className="mb-4 border-b border-gray-200 pb-4 text-xl font-semibold">
				Categories
			</h2>
			{categories.map((category) => (
				<Link href={`/blog/category/${category.slug}`}>
					<span className="mb-4 block cursor-pointer transition duration-500 hover:translate-x-2">
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
