import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
	Image: (props) => <img alt={props.alt} src={props.src} className="mb-8" />,
	Note: (props) => (
		<div
			{...props}
			className="border-l-4 border-l-purple-500 pl-4 font-medium text-white"
		/>
	)
}

export function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code)
	return (
		<article className="prose prose-invert max-w-full prose:pre:font-mono prose:code:leading-relaxed">
			<Component components={{ ...components }} />
		</article>
	)
}
