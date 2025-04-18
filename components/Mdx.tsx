import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
	Image: (props) => <img alt={props.alt} src={props.src} className="mb-8" />,
	Card: ({ children, ...props }) => {
		return (
			<div
				{...props}
				className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-white [&>p]:m-0"
			>
				<span className="text-primary text-sm">{props.title || 'NOTE'}</span>
				{children}
			</div>
		)
	}
}

export function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code)
	return (
		<article className="prose max-w-full font-serif text-xl dark:prose-invert prose-h1:font-ui prose-h2:font-ui prose-h3:font-ui prose-h4:font-ui prose-pre:font-mono">
			<Component components={{ ...components }} />
		</article>
	)
}
