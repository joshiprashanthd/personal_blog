import Tex from '@matejmazur/react-katex'

export default {
	div: (props) => {
		if (props.className && props.className.includes('math-display')) {
			import('katex/dist/katex.min.css')
			return <Tex block math={props.children} className="text-white" />
		}

		return <div {...props} />
	},
	span: (props) => {
		if (props.className && props.className.includes('math-inline')) {
			import('katex/dist/katex.min.css')
			return <Tex math={props.children} className="text-lg text-white" />
		}
		return <span {...props} />
	},
	Image: (props) => <img alt={props.alt} src={props.src} className="mb-8" />,
	Note: (props) => (
		<div
			{...props}
			className="border-l-4 border-l-purple-500 pl-4 font-medium text-white"
		/>
	)
}
