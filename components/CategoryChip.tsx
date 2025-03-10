'use client'
import { Post } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
const CategoryChip = ({ post }: { post: Post }) => {
	const router = useRouter()
	return (
		<>
			{post.category && (
				<button
					className="rounded-full border border-primary-light px-2 font-sans text-xs text-primary-light hover:bg-primary-light/80 hover:text-white dark:border-primary-dark dark:text-white dark:hover:bg-primary-dark/80 "
					onClick={() =>
						router.push(`/blog/category/${post.category.toLowerCase()}`)
					}
				>
					{post.category}
				</button>
			)}
			{/* Consider adding more display logic here in the future */}
		</>
	)
}

export default CategoryChip
