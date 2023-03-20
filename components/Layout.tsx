import { Header } from '.'

const Layout = ({ children }) => {
	return (
		<div className="absolute min-h-screen w-full">
			<div className="mx-auto min-h-screen max-w-2xl text-white">
				<Header />
				<main className={`pb-8`}>{children}</main>
			</div>
		</div>
	)
}
export default Layout
