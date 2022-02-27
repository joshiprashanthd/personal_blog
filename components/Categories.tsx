import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Categories: React.ComponentType = ({}) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data));
	}, []);

	return (
		<div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
			<h3 className="mb-8 border-b border-gray-100 pb-4 text-xl font-semibold">
				Categories
			</h3>
			{categories.map((category: any) => (
				<Link href={`/categories/${category.slug}`}>
					<span className="translate mb-2 block cursor-pointer text-lg font-medium transition duration-500 hover:translate-x-1">
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
