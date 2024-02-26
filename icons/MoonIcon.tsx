export default function MoonIcon ({size = '24', className=""}: {size?: string, className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className={className}>
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
    )
}