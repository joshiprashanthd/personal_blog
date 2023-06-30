import Image from 'next/image'
export default async function HomePage() {
	return (
		<section className="flex flex-col justify-center">
			<Image
				src="https://picsum.photos/200/300?grayscale"
				className="mb-6 h-40 w-40 rounded-lg"
				height={160}
				width={160}
				alt="Random Image"
			/>
			<div className="flex items-center">
				<h1 className="mb-1 font-serif text-2xl font-semibold sm:text-4xl">
					Prashant Joshi
				</h1>
				<div className="mx-4 flex-1 border-t-2 border-purple-500" />
			</div>
			<div className="my-8">
				<h1 className="text-base font-medium text-purple-500 sm:text-lg">
					About ME
				</h1>
				<p>
					I am a curious and passionate learner who is constantly exploring the
					fascinating world of AI. I have a solid background in web development
					and has completed several successful projects in this field.
					Additionally, I have a deep understanding of creating and deploying
					backend servers, which makes me a valuable asset to any tech team. If
					you're looking for someone who is skilled in AI and web development, I
					am a perfect fit for you.
				</p>
			</div>
			<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<h1 className="text-base font-medium text-purple-500 sm:text-lg">
						Passionate ABOUT
					</h1>
					<ul className="ml-6 list-disc">
						<li>Deep Learning</li>
						<li>Natural Language Processing</li>
						<li>Web Development</li>
						<li>Cloud Computing</li>
						<li>Business</li>
					</ul>
				</div>
				<div>
					<h1 className="text-base font-medium text-purple-500 sm:text-lg">
						Languages I KNOW
					</h1>
					<ul className="ml-6 list-disc">
						<li>Python</li>
						<li>C and C++</li>
						<li>Java</li>
						<li>Javascript and Typescript</li>
						<li>HTML and CSS</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
