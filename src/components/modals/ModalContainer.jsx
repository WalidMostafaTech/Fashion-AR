import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const ModalContainer = ({ openModal, setOpenModal, children, title }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <section
      className={`fixed z-50 top-0 end-0 w-full h-screen bg-black/40 flex items-center justify-center transition-opacity duration-300 px-4 sectionPadding ${
        openModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpenModal(false)}
    >
      <div
        className={`w-full max-w-7xl max-h-full overflow-y-auto p-4 bg-bg-clr duration-300 flex flex-col gap-4 ${
          openModal ? "translate-y-0" : "translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-gray-clr2">
          <h2 className="text-2xl">{title}</h2>
          <button
            className="bg-main-clr text-white text-2xl p-1 cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ModalContainer;
