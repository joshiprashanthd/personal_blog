import React from "react";

export const components = {
	h2: (props: any) => (
		<h2
			{...props}
			className="mb-4 border-b border-gray-500 pb-4 text-3xl font-semibold"
		/>
	),
	h3: (props: any) => (
		<h3
			{...props}
			className="mb-4 border-b border-gray-500 pb-4 text-2xl font-semibold"
		/>
	),
	p: (props: any) => <p {...props} className="mb-4 text-base" />
};
