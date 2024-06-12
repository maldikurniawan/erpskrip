/* eslint-disable @next/next/no-img-element */
const CardBlog = ({ data }) => {
	return (
		<div className="rounded-2xl overflow-hidden  text-sm bg-white shadow p-5">
			<div className="my-7 relative">
				<div className="absolute -rotate-3 bg-[#54C9EF] w-full h-32 rounded-lg"></div>
				<div className="relative z-10 bg-white w-full h-32 rounded-lg overflow-hidden">
					<img src={data.image} alt="blog" className="w-full h-full object-cover" />
				</div>
			</div>

			<div className="mb-4">
				<span className="p-1 px-2 text-sm bg-[#BAF5FF] text-[#0C375A] rounded">
					News
				</span>
			</div>

			<div className="mb-4">
				<div className="font-bold text-base">{data.title}</div>
			</div>

			<div className="flex justify-between items-end">
				<div>{data.date}</div>
				<button className="py-2 px-3 rounded bg-[#0C375A] font-medium text-white">
					Baca Post
				</button>
			</div>
		</div>
	);
};

export default CardBlog;
