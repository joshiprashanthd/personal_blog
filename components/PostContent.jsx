import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
	atomOneLight,
	atomOneDark
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const PostContent = ({ post }) => {
	return (
		<div className="text-center">
			<div className="relative overflow-hidden pb-16">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					layout="responsive"
					className="h-full w-full rounded-lg object-cover object-top"
				/>
			</div>
			<div className="text-left">
				<ReactMarkdown
					components={{
						h1: (props) => (
							<h1
								{...props}
								className="mb-4 font-heading text-3xl font-black"
							/>
						),
						h2: (props) => (
							<h2 {...props} className="mb-4 font-heading text-2xl font-bold" />
						),
						h3: (props) => (
							<h3
								{...props}
								className="mb-4 font-heading text-xl font-semibold"
							/>
						),
						p: (props) => (
							<p {...props} className="mb-4 font-sans text-base leading-8" />
						),
						ul: (props) => <ul {...props} className="mb-4 list-disc pl-8" />,
						li: (props) => (
							<li {...props} className="mb-2 text-base leading-8" />
						),
						code: ({ inline, language, children }) => {
							const { colorMode } = useColorMode()

							if (inline) {
								return (
									<code className="rounded-md px-1 font-mono shadow-sm">
										{children}
									</code>
								)
							}

							return (
								<SyntaxHighlighter
									language={language}
									children={children}
									style={colorMode == 'dark' ? atomOneDark : atomOneLight}
									showLineNumbers={true}
									lineNumberStyle={{
										color: '#999'
									}}
									customStyle={{
										padding: '1rem',
										borderRadius: '0.5rem',
										fontSize: '0.9rem',
										lineHeight: '1.5rem',
										backgroundColor:
											colorMode == 'dark'
												? 'rgb(45, 55, 72)'
												: 'rgb(243, 244, 246)',
										marginBottom: '1rem'
									}}
								/>
							)
						},
						blockquote: (props) => (
							<blockquote
								{...props}
								className="mb-4 border-l-4 border-gray-300 pl-4 align-middle text-lg text-gray-600"
							>
								{props.children}
							</blockquote>
						)
					}}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default PostContent
