import { gql, useQuery } from '@apollo/client'
import { Link, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

const query = gql`
	query GetCategories {
		categories {
			name
			slug
		}
	}
`

const NewLink = ({ ...props }) => {
	const color = useColorModeValue('gray.600', 'gray.500')
	const hoverColor = useColorModeValue('gray.400', 'gray.300')
	return (
		<Link
			as="a"
			{...props}
			cursor="pointer"
			color={color}
			_hover={{
				color: hoverColor,
				animationDuration: '200ms',
				outline: 'none',
				ring: 'none'
			}}
		/>
	)
}

const Label = ({ ...props }) => {
	const color = useColorModeValue('gray.600', 'gray.400')
	return <Text {...props} fontSize="sm" fontWeight="semibold" color={color} />
}

const Footer = () => {
	const { data } = useQuery(query)

	return (
		<Flex
			paddingY={16}
			columnGap={12}
			rowGap={8}
			flexDirection={['column', 'row']}
		>
			<Flex flexDirection="column" gap={4}>
				<Label fontSize="sm" fontWeight="semibold" color="gray.600">
					Explore
				</Label>
				<NextLink href="/">
					<NewLink>Home</NewLink>
				</NextLink>
				<NextLink href="/projects">
					<NewLink>Projects</NewLink>
				</NextLink>
				<NextLink href="/blog">
					<NewLink>Blog</NewLink>
				</NextLink>
			</Flex>
			{data && (
				<Flex flexDirection="column" gap={4}>
					<Label fontSize="sm" fontWeight="semibold" color="gray.600">
						Categories
					</Label>
					{data.categories.map((category) => (
						<NextLink href={`/blog/category/${category.slug}`} passHref>
							<NewLink key={category.slug}>{category.name}</NewLink>
						</NextLink>
					))}
				</Flex>
			)}
			<Flex flexDirection="column" gap={4}>
				<Label fontSize="sm" fontWeight="semibold" color="gray.600">
					Connect
				</Label>
				<NewLink href="https://twitter.com/prashantjoshi09" target="_blank">
					Twitter
				</NewLink>
				<NewLink href="https://github.com/joshiprashanthd" target="_blank">
					Github
				</NewLink>
			</Flex>
		</Flex>
	)
}

export default Footer
