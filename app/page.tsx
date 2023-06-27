export default async function HomePage() {
	return (
		<section className="flex flex-col items-center justify-center">
			<img
				src="https://picsum.photos/200/300?grayscale"
				className="mb-4 h-40 w-40 rounded-full"
			/>
			<h1 className="mb-4 block font-serif text-3xl font-semibold sm:text-4xl">
				Prashant Joshi
			</h1>
			<p className="mb-8 text-center text-sm font-light sm:text-base">
				I am a curious and passionate learner who is constantly exploring the
				fascinating world of AI. I have a solid background in web development
				and has completed several successful projects in this field.
				Additionally, I have a deep understanding of creating and deploying
				backend servers, which makes me a valuable asset to any tech team. If
				you're looking for someone who is skilled in AI and web development, I
				am a perfect fit for you.
			</p>
			<div className="flex w-full flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
				<a
					className="b-hover b-hover-bg flex min-w-max items-center rounded-md px-4 py-2 text-sm font-medium text-purple-400 sm:text-base"
					href="https://twitter.com/jprashanthd"
				>
					Connect on twitter
				</a>
				<a
					className="b-hover b-hover-bg flex min-w-max items-center rounded-md px-4 py-2 text-sm font-medium text-purple-400 sm:text-base"
					href="https://github.com/joshiprashanthd"
				>
					Connect on github
				</a>
			</div>
		</section>
	)
}
