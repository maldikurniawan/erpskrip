import { Transition } from "@headlessui/react";

const Modal = ({ show, setShow, children, onClickBackdrop }) => {
	const onBackDropClick = () => {
        if (onClickBackdrop) {
            onClickBackdrop()
        } else {
            setShow(false);
        }
	};

	return (
		<Transition
			show={show}
			className="fixed inset-0 z-50 p-5 flex flex-col items-center justify-center overflow-hidden"
		>
			{/* Backdrop */}
			<Transition.Child
				as="div"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className="w-full h-full absolute bg-black/20 transition-opacity duration-300 z-0"
				onClick={onBackDropClick}
			/>

			{/* Content */}
			<Transition.Child
				as="div"
				enterFrom="opacity-0 scale-70"
				enterTo="opacity-100 scale-100"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-70"
				className={`transition-[opacity,transform] duration-300 rounded-lg w-full xs:w-80 z-10`}
			>
				<div className="max-h-[90vh] h-full w-full bg-white dark:bg-base-600 rounded-lg overflow-y-auto custom-scroll">
					{children}
				</div>
			</Transition.Child>
		</Transition>
	);
};

export default Modal;
