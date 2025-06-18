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

      <section className="container sectionPadding grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <SidebarFilters
          openFilters={openFilters}
          setOpenFilters={setOpenFilters}
        />

        <div className="lg:col-span-2 xl:col-span-3 space-y-4">
          <img loading="lazy" src={bannerImg} alt="" />

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
