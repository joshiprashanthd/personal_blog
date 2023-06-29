export default function MenuIcon ({size = '24'}: {size?: string}) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-purple-400">
			<line x1="4" x2="20" y1="12" y2="12"/>
			<line x1="4" x2="20" y1="6" y2="6"/>
			<line x1="4" x2="20" y1="18" y2="18"/>
		</svg>
	)
}