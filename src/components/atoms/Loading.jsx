import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({ size = 20 }) => {
	return (
		<div className="flex justify-center items-center">
			<AiOutlineLoading3Quarters
				style={{ fontSize: size }}
				className="animate-spin"
			/>
		</div>
	);
};

export default Loading;
