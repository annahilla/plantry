import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import useClickOutside from "@/hooks/useClickOutside";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  isSmall?: boolean;
}

const Modal = ({
  isOpen,
  closeModal,
  children,
  isSmall = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null!);
  useClickOutside(modalRef, closeModal);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black z-[11000]">
        <div
          ref={modalRef}
          className={`${
            isSmall ? "max-w-2xl lg:w-1/2" : "w-2xl lg:w-[80vw]"
          } w-11/12 relative bg-white py-4 px-3 rounded flex flex-col items-center justify-start max-h-[85vh] md:max-h-[95vh]`}
        >
          <button className="absolute right-5 top-5" onClick={closeModal}>
            <IoMdClose />
          </button>
          <div className="overflow-y-auto w-full p-1 md:p-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
