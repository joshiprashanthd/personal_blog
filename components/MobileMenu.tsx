import Link from 'next/link'
import { siteConfig } from '../helpers/siteConfig'
import MenuIcon from '../icons/MenuIcon'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from './ui/Dropdown'

const MobileMenu = () => {
	return (
		<div className="sm:hidden">
			<DropdownMenu>
				<DropdownMenuTrigger>
					<MenuIcon />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{siteConfig.nav.links.map((item) => (
						<DropdownMenuItem asChild key={item.title}>
							<Link href={item.href}>{item.title}</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default MobileMenu
