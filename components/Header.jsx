import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
	Button,
	IconButton,
	useColorMode,
	useColorModeValue,
	Show,
	Hide,
	useDisclosure,
	DrawerBody,
	DrawerContent,
	Drawer,
	DrawerOverlay,
	Text,
	Spacer,
	HStack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const { isOpen, onClose, onOpen } = useDisclosure()

	const router = useRouter()
	const path = router.pathname

	const inactiveTabColor = useColorModeValue('gray.600', 'gray.400')
	const iconColor = useColorModeValue('gray.800', 'gray.200')
	const iconButtonColor = useColorModeValue('gray.200', 'gray.700')
	const bgColor = useColorModeValue('gray.100', 'gray.800')

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
		<HStack py={12}>
			<Show above="sm">
				<HStack gap={8}>
					{routes.map((route) => (
						<NextLink href={route.href} key={route.href}>
							<Button
								bg="transparent"
								color={path === route.href ? 'blue.400' : inactiveTabColor}
								rounded="md"
							>
								{route.name}
							</Button>
						</NextLink>
					))}
				</HStack>
				<Spacer />
			</Show>
			<Hide above="sm">
				<IconButton
					icon={<HamburgerIcon />}
					backgroundColor={iconButtonColor}
					color={iconColor}
					onClick={onOpen}
				/>
				<Spacer />
				<Drawer isOpen={isOpen} placement="left" size="full" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent bg={bgColor} p={8}>
						<IconButton
							icon={<CloseIcon w="3.5" h="3.5" />}
							w="min"
							onClick={onClose}
							mb={8}
						/>
						<DrawerBody textAlign="center">
							{routes.map((route) => (
								<NextLink href={route.href} key={route.href}>
									<Text display="block" fontSize="lg" onClick={onClose} mb={8}>
										{route.name}
									</Text>
								</NextLink>
							))}
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Hide>
			<IconButton
				icon={colorMode == 'dark' ? <SunIcon /> : <MoonIcon />}
				onClick={toggleColorMode}
				backgroundColor={iconButtonColor}
				color={iconColor}
			/>
		</HStack>
	)
}

export default Header
