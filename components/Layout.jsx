import React from "react";
import { Header } from ".";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="mx-auto">{children}</div>
		</>
	);
};
export default Layout;
