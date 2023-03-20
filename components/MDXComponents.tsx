import Tex from '@matejmazur/react-katex'

export default {
	h1: (props) => (
		<div className="flex items-center">
			<h1 {...props} className="mb-1 text-3xl font-bold" />
			<div className="ml-4 flex-1 border-t-2  border-gray-500" />
		</div>
	),
	h2: (props) => <h2 {...props} className="mb-1 text-2xl font-medium" />,
	h3: (props) => <h3 {...props} className="mb-1 text-xl font-medium" />,
	p: (props) => <p className="mb-4 leading-8 text-gray-200" {...props} />,
	ul: (props) => (
		<ul className="mb-4 list-inside pl-4 text-gray-300" {...props} />
	),
	ol: (props) => <ol className="mb-4 list-inside pl-4" {...props} />,
	li: (props) => <li className="mb-4" {...props} />,
	div: (props) => {
		if (props.className.includes('math-display')) {
			import('katex/dist/katex.min.css')
			return <Tex block math={props.children} className="text-sm" />
		}

		return <div {...props} />
	},
	span: (props) => {
		if (props.className.includes('math-inline')) {
			import('katex/dist/katex.min.css')
			return <Tex math={props.children} />
		}
		return <span {...props} />
	},
	code: (props) => {
		if (!props.className) {
			return (
				<span className="bg-[#252525] px-1 font-mono text-sm tracking-wide text-white">
					{props.children}
				</span>
			)
		}

		return (
			<div
				{...props}
				className="mb-4 overflow-auto bg-[#252525] p-4 text-sm leading-relaxed tracking-wide"
			/>
		)
	},
	Image: (props) => <img alt={props.alt} src={props.src} className="mb-8" />
}
