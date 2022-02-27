import { NextComponentType, NextPage } from "next";
import React from "react";
import { Header } from ".";

type Props = {
	children: any;
};

const Layout: NextPage<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<div className="mx-auto max-w-screen-md">{children}</div>
		</>
	);
};
export default Layout;
