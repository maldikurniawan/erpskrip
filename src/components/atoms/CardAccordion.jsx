import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CardAccordion = ({ children, title, open, accordion }) => {
	const [isOpen, setIsOpen] = useState(open);
	return (
		<div className="rounded overflow-hidden overflow-x-auto custom-scroll shadow mb-3">
			<div
				onClick={() => accordion && setIsOpen(!isOpen)}
				className={`p-3 bg-gradient-to-r from-[#0972FF] to-[#1DDEFF] border-b text-white flex items-center justify-between ${
					accordion ? "cursor-pointer" : ""
				}`}
			>
				<span>{title}</span>
				{accordion && <BiChevronDown  size={20}/>}
			</div>
			<div
				className={`bg-white overflow-hidden transition-[max-height] duration-500 ease-in-out ${
					isOpen || !accordion ? "max-h-[200vh]" : "max-h-0"
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default CardAccordion;
