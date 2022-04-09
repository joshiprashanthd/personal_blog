import Image from 'next/image'
import { Text, Heading, Box, useColorModeValue } from '@chakra-ui/react'
import Tex from '@matejmazur/react-katex'

export default {
	h1: (props) => (
		<Heading {...props} as="h1" fontSize={['xl', '2xl', '3xl']} mb={4} />
	),
	h2: (props) => (
		<Heading {...props} as="h2" fontSize={['lg', 'xl', '2xl']} mb={4} />
	),
	h3: (props) => (
		<Heading as="h3" fontSize={['md', 'lg', 'xl']} mb={4} {...props} />
	),
	h4: (props) => (
		<Heading as="h4" fontSize={['sm', 'md', 'lg']} mb={4} {...props} />
	),
	h5: (props) => (
		<Heading as="h5" fontSize={['xs', 'sm', 'md']} mb={4} {...props} />
	),
	h6: (props) => (
		<Heading as="h6" fontSize={['xs', 'sm', 'md']} mb={4} {...props} />
	),
	p: (props) => <Text as="p" mb={4} {...props} lineHeight="8" />,
	ul: (props) => (
		<Box as="ul" mb={4} {...props} listStylePosition="inside" pl={4} />
	),
	ol: (props) => (
		<Box as="ol" mb={4} {...props} listStylePosition="inside" pl={4} />
	),
	li: (props) => <Text as="li" mb={4} {...props} />,
	div: (props) => {
		if (props.className.includes('math-display')) {
			import('katex/dist/katex.min.css')
			return <Tex block math={props.children} />
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
		const inlineCodeBgColor = useColorModeValue('gray.200', 'gray.700')
		const inlineCodeColor = useColorModeValue('gray.800', 'gray.300')

		if (!props.className) {
			return (
				<Text
					as="span"
					children={props.children}
					rounded="md"
					color={inlineCodeColor}
					bg={inlineCodeBgColor}
					px={1}
					fontFamily="mono"
					fontSize="md"
				/>
			)
		}
		return (
			<Box
				as="pre"
				{...props}
				rounded="lg"
				bg={inlineCodeBgColor}
				color={inlineCodeColor}
				p={4}
				mb={4}
				fontSize="md"
				overflow="auto"
			/>
		)
	},
	NextImage: (props) => <Image {...props} />
}