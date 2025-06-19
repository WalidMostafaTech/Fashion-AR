import { GoSearch } from "react-icons/go";
import ModalContainer from "./ModalContainer";
import ProductList from "../Product/ProductList";
import { productsList } from "../../data/data";

const SearchModal = ({ openModal, setOpenModal }) => {
  return (
    <ModalContainer
      openModal={openModal}
      setOpenModal={setOpenModal}
      title={"البحث فى المتجر"}
    >
      <div className="w-full p-2 border border-gray-clr2 rounded-md flex items-center">
        <span className="text-3xl px-2 border-e border-gray-clr2">
          <GoSearch />
        </span>
        <input
          type="text"
          placeholder="ابحث باستخدام العلامات التجارية والفئات..."
          className="w-full px-2 outline-none"
        />
      </div>

      <h3 className="text-xl font-medium">الأكثر بحثا</h3>

      <ProductList products={productsList.slice(0, 5)}/>
    </ModalContainer>
  );
};

export default SearchModal;
