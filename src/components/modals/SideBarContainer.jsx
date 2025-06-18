import { IoClose } from "react-icons/io5";

const SideBarContainer = ({
  openSideBar,
  setOpenSideBar,
  title,
  children,
  dir = "start",
}) => {
  return (
    <aside
      className={`fixed z-50 top-0 end-0 w-full h-[100dvh] bg-black/30 transition-opacity duration-300 ${
        openSideBar ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpenSideBar(false)}
    >
      <div
        className={`w-10/12 md:w-[500px] ${
          dir === "end" && "ms-auto"
        } h-full flex flex-col bg-bg-clr duration-300 ${
          openSideBar
            ? "translate-x-0"
            : `${
                dir === "end"
                  ? "ltr:translate-x-full rtl:-translate-x-full"
                  : "ltr:-translate-x-full rtl:translate-x-full"
              } `
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold">{title}</h2>
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setOpenSideBar(false)}
          />
        </div>

        {children}
      </div>
    </aside>
  );
};

export default SideBarContainer;
