"use client";

import { DOTS, usePagination } from "@/hooks/usePagination";
import { useWindowSize } from "@/hooks/useWindowSize";
import { TbDots } from "react-icons/tb";

const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}) => {
	const { width } = useWindowSize();
	const siblings = width < 640 ? 0 : siblingCount;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount: siblings,
		pageSize,
	});

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange?.length - 1];

	return (
		<div
			className={`flex text-xs md:text-sm gap-1.5 md:gap-2.5 px-4 md:px-6 py-2 bg-white rounded-full shadow `}
		>
			{totalCount > 0 && (
				<>
					{/* Left */}
					<button
						className="disabled:text-[#A1A1A1]"
						onClick={onPrevious}
						disabled={currentPage === 1}
					>
						Prev
					</button>

					{paginationRange.map((pageNumber, index) => {
						{
							/* Dots */
						}
						if (pageNumber === DOTS) {
							return (
								<button
									className="disabled:text-[#A1A1A1] w-6 h-6 flex items-center justify-center"
									key={index}
									disabled
								>
									<TbDots />
								</button>
							);
						}

						{
							/* Number */
						}
						return (
							<button
								className={`disabled:text-[#A1A1A1] w-6 h-6 flex items-center justify-center ${
									pageNumber === currentPage
										? "bg-[#1D9BF0] text-white rounded-full"
										: ""
								}`}
								key={index}
								onClick={() => onPageChange(pageNumber)}
							>
								{pageNumber}
							</button>
						);
					})}

					{/* Right */}
					<button
						className="disabled:text-[#A1A1A1]"
						disabled={currentPage === lastPage}
						onClick={onNext}
					>
						Next
					</button>
				</>
			)}
		</div>
	);
};

export default Pagination;
