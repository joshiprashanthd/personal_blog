import { mode } from '@chakra-ui/theme-tools'

export default {
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
		serif: '"IBM Plex Serif", serif',
		mono: 'monospace'
	},
	config: {
		initialColorMode: 'dark'
	},
	styles: {
		global: (props) => ({
			'.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted ':
				{
					color: mode('green.500', 'green.400')(props)
				},
			'.token.comment,.token.prolog, .token.doctype, .token.cdata': {
				color: mode('gray.700', 'gray.300')(props)
			},
			'.token.punctuation': {
				color: mode('gray.700', 'gray.300')(props)
			},
			'.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted':
				{
					color: mode('purple.500', 'purple.400')(props)
				},
			'.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string':
				{
					color: mode('pink.500', 'pink.400')(props)
				},
			'.token.atrule, .token.attr-value, .token.keyword': {
				color: mode('blue.500', 'blue.400')(props)
			},
			'.token.regex, .token.important, .token.variable': {
				color: mode('orange.500', 'orange.400')(props)
			},
			'.token.function': {
				color: mode('red.500', 'red.400')(props)
			}
		})
	}
}
