import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false)
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)

	const commentRef = useRef()
	const nameRef = useRef()
	const emailRef = useRef()
	const storeDataRef = useRef()

	useEffect(() => {
		nameRef.current.value = window.localStorage.getItem('name')
		emailRef.current.value = window.localStorage.getItem('email')
	}, [])

	const handleCommentSubmission = () => {
		setError(false)
		const { value: comment } = commentRef.current
		const { value: name } = nameRef.current
		const { value: email } = emailRef.current
		const { checked: storeData } = storeDataRef.current

		if (!comment || !name || !email) {
			setError(true)
			return
		}

		const commentObj = {
			name,
			email,
			comment,
			slug
		}

		if (storeData) {
			window.localStorage.setItem('name', name)
			window.localStorage.setItem('email', email)
		} else {
			window.localStorage.removeItem('name')
			window.localStorage.removeItem('email')
		}

		submitComment(commentObj).then((res) => {
			setShowSuccessMessage(true)
			setTimeout(() => {
				setShowSuccessMessage(false)
			}, 3000)
		})
	}

	return (
		<div className="mb-8 rounded-lg p-8 pb-12 shadow-lg">
			<h3 className="mb-4 border-b border-gray-200 pb-4 text-xl font-semibold">
				Leave Comment
			</h3>
			<div className="mb-4 grid grid-cols-1 gap-4">
				<textarea
					ref={commentRef}
					className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
					placeholder="Comment"
					name="comment"
				></textarea>
			</div>
			<div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<input
					ref={nameRef}
					className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
					placeholder="Name"
					name="name"
				/>
				<input
					ref={emailRef}
					className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
					placeholder="Email"
					name="email"
				/>
			</div>
			<div className="mb-4 grid grid-cols-1 gap-4">
				<div className="flex items-center">
					<input
						type="checkbox"
						ref={storeDataRef}
						id="storeData"
						name="storedata"
						value="true"
					/>
					<label htmlFor="storedata" className="ml-2 text-xs">
						Remember name and email.
					</label>
				</div>
			</div>
			{error && (
				<p className="text-xs text-red-500">All fields are required.</p>
			)}

			<div className="mt-8">
				<button
					type="button"
					onClick={handleCommentSubmission}
					className="ease inline-block w-full rounded-lg bg-blue-400 p-4 text-white transition duration-500 hover:-translate-y-2"
				>
					Post Comment
				</button>
				{showSuccessMessage && (
					<p className="float-right mt-3 text-xl font-semibold text-green-500">
						Comment Submitted For Review
					</p>
				)}
			</div>
		</div>
	)
}

export default CommentsForm
