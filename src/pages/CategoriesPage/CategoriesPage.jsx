import { useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import SidebarFilters from "./SidebarFilters/SidebarFilters";
import bannerImg from "../../assets/images/slider-img.png";
import FilterProduct from "./FilterProduct/FilterProduct";
import ProductList from "../../components/Product/ProductList";
import { productsList } from "../../data/data";
import { IoFilterSharp } from "react-icons/io5";
import Pagination from "../../components/common/Pagination";

const CategoriesPage = () => {
  const [columns, setColumns] = useState(4);
  const [openFilters, setOpenFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <article>
      <BreadCrumb
        title={"المتجر"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/categories", label: "المتجر" },
        ]}
      />

      <section className="container py-8 grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="hidden lg:block">
          <SidebarFilters />
        </div>

        <div
          className={`fixed z-40 top-0 start-0 w-full h-screen bg-black/30 transition-opacity duration-300 lg:hidden ${
            openFilters ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpenFilters(false)}
        >
          <div
            className={`w-10/12 sm:w-[300px] h-full flex flex-col bg-gray-50 duration-300 ${
              openFilters
                ? "translate-x-0"
                : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">تصفية المنتجات</h2>
              <button
                className="text-2xl"
                onClick={() => setOpenFilters(false)}
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-1">
              <SidebarFilters />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-span-3 space-y-4">
          <img src={bannerImg} alt="" />

          <button
            onClick={() => setOpenFilters(true)}
            className="lg:hidden flex items-center gap-2 text-white bg-main-clr px-4 py-2 text-sm font-semibold rounded cursor-pointer"
          >
            <IoFilterSharp className="text-xl" />
            تصفية
          </button>

          <FilterProduct setColumns={setColumns} columns={columns} />

          <ProductList products={productsList} columns={columns} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </article>
  );
};

export default CategoriesPage;
