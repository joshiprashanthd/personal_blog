import { Header } from '.'

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen w-full sm:mx-0">
			<div className="min-h-screen max-w-2xl overflow-hidden px-4 text-white sm:mx-auto">
				<Header />
				<main className={`pb-8`}>{children}</main>
			</div>
		</div>
	)
}
export default Layout
