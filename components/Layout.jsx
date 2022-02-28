import React from "react";
import { Header } from ".";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="mx-auto max-w-screen-lg">{children}</div>
		</>
	);
};
export default Layout;
