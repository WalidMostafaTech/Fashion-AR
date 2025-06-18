import {
  TfiLayoutColumn2Alt,
  TfiLayoutColumn3Alt,
  TfiLayoutColumn4Alt,
} from "react-icons/tfi";

const FilterProduct = ({ setColumns, columns }) => {
  return (
    <div className="bg-gray-100 p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-grow flex-wrap xl:flex-nowrap xl:flex-0">
        <select className="outline-none bg-white border border-gray-200 p-2 flex-grow">
          <option defaultValue>ترتيب تصاعدى</option>
          <option value="1">ترتيب تنازلى</option>
          <option value="2">السعر من أقل الى أعلى</option>
          <option value="3">السعر من اعلى الى اقل</option>
        </select>
        <select className="outline-none bg-white border border-gray-200 p-2 flex-grow">
          <option defaultValue>10 منتجات</option>
          <option value="1">25 منتجات</option>
          <option value="2">50 منتجات</option>
          <option value="3">100 منتجات</option>
        </select>
      </div>

      <div className="hidden xl:flex items-center gap-4 text-2xl">
        <button
          onClick={() => setColumns(4)}
          className={`p-2 transition cursor-pointer ${
            columns === 4 ? "bg-main-clr text-white" : "bg-white text-main-clr"
          }`}
        >
          <TfiLayoutColumn4Alt />
        </button>
        <button
          onClick={() => setColumns(3)}
          className={`p-2 transition cursor-pointer ${
            columns === 3 ? "bg-main-clr text-white" : "bg-white text-main-clr"
          }`}
        >
          <TfiLayoutColumn3Alt />
        </button>
        <button
          onClick={() => setColumns(2)}
          className={`p-2 transition cursor-pointer ${
            columns === 2 ? "bg-main-clr text-white" : "bg-white text-main-clr"
          }`}
        >
          <TfiLayoutColumn2Alt />
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
