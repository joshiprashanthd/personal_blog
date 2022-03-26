import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
	Button,
	Flex,
	IconButton,
	Box,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const router = useRouter()
	const path = router.pathname

	const activeTabColor = useColorModeValue('blue.400', 'blue.400')
	const inactiveTabColor = useColorModeValue('gray.500', 'gray.400')
	const iconColor = useColorModeValue('gray.700', 'gray.200')
	const iconButtonColor = useColorModeValue('gray.200', 'gray.700')

	const routes = [
		{
			href: '/',
			name: 'Home'
		},
		{
			href: '/projects',
			name: 'Projects'
		},
		{
			href: '/blog',
			name: 'Blog'
		}
	]

	return (
		<Flex py={8} mb={4}>
			<Flex flexGrow={1} gap={4}>
				{routes.map((route) => (
					<Link href={route.href} key={route.href}>
						<Button
							bg="transparent"
							color={path === route.href ? activeTabColor : inactiveTabColor}
							px={4}
							py={2}
						>
							{route.name}
						</Button>
					</Link>
				))}
			</Flex>
			<IconButton
				icon={colorMode == 'dark' ? <SunIcon /> : <MoonIcon />}
				onClick={toggleColorMode}
				backgroundColor={iconButtonColor}
				color={iconColor}
			/>
		</Flex>
	)
}

export default Header
