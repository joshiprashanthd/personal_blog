import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Header: NextPage = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => setCategories(data));
	}, []);

	return (
		<div className="container mx-auto mb-8">
			<div className="inline-block w-full border-b border-gray-400 py-6 px-16">
				<div className="block md:float-left md:contents">
					<Link href="/">
						<span className="cursor-pointer text-2xl font-bold text-black">
							Prashant Joshi
						</span>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{categories.map((category: any) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<span className="ml-4 mt-1 cursor-pointer border-gray-700 align-middle font-medium text-black hover:border-b md:float-right">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
