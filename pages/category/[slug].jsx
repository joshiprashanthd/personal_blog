import React from 'react'
import { useRouter } from 'next/router'

const Category = () => {
	const router = useRouter()
	if (router.isFallback) return <div>Loading...</div>
	return <div>Category</div>
}

export default Category
