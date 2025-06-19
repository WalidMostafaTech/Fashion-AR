import { MdDone } from "react-icons/md";
import FilterAccordion from "./FilterAccordion";
import SideBarContainer from "../../../components/modals/SideBarContainer";

const categories = ["الموضة", "الأثاث", "الكتب", "الخضروات", "الحقائب"];
const brands = [
  "كودور إيج",
  "غلامور غايز",
  "أوربان شيك",
  "فوغ فيستا",
  "فيلوسيتي فايب",
];
const colors = ["أزرق", "أخضر", "أحمر", "بيج", "أسود"];

export default function SidebarFilters({ openFilters, setOpenFilters }) {
  const sideFilter = (
    <aside className="bg-gray-clr p-4 space-y-4 sticky lg:top-4 overflow-y-auto">
      <FilterAccordion title="الفئات">
        {categories.map((item, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="peer hidden" id={`cat-${i}`} />
            <div
              className="w-5 h-5 border border-gray-clr3 text-gray-clr text-lg rounded-sm mr-2 
                    peer-checked:bg-main-clr transition-colors"
            >
              <MdDone />
            </div>
            <span className="text-gray-clr3 font-semibold peer-checked:text-main-clr">
              {item}
            </span>
          </label>
        ))}
      </FilterAccordion>

      <FilterAccordion title="العلامة التجارية">
        {brands.map((item, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="peer hidden" id={`cat-${i}`} />
            <div
              className="w-5 h-5 border border-gray-clr3 text-gray-clr text-lg rounded-sm mr-2 
                    peer-checked:bg-main-clr transition-colors"
            >
              <MdDone />
            </div>
            <span className="text-gray-clr3 font-semibold peer-checked:text-main-clr">
              {item}
            </span>
          </label>
        ))}
      </FilterAccordion>

      <FilterAccordion title="الألوان">
        {colors.map((item, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="peer hidden" id={`cat-${i}`} />
            <div
              className="w-5 h-5 border border-gray-clr3 text-gray-clr text-lg rounded-sm mr-2 
                    peer-checked:bg-main-clr transition-colors"
            >
              <MdDone />
            </div>
            <span className="text-gray-clr3 font-semibold peer-checked:text-main-clr">
              {item}
            </span>
          </label>
        ))}
      </FilterAccordion>

      <FilterAccordion title="التقييم">
        {[5, 4, 3, 2, 1].map((stars, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="peer hidden"
              id={`rating-${stars}`}
            />
            <div
              className="w-5 h-5 border border-gray-clr3 text-gray-clr text-lg rounded-sm mr-2 
                peer-checked:bg-main-clr transition-colors"
            >
              <MdDone />
            </div>
            <div className="flex items-center gap-1 font-semibold">
              {[...Array(5)].map((_, j) => (
                <span
                  key={j}
                  className={`${
                    j < stars ? "text-yellow-500" : "text-gray-clr2"
                  } text-xl leading-none`}
                >
                  ★
                </span>
              ))}
              <span className="text-xs text-gray-clr3 ml-1">({stars}) نجوم</span>
            </div>
          </label>
        ))}
      </FilterAccordion>

      <FilterAccordion title="السعر">
        <input
          type="text"
          className="w-full p-2 bg-white border border-gray-clr2 outline-none"
        />
      </FilterAccordion>
    </aside>
  );

  return (
    <>
      <div className="hidden lg:block">{sideFilter}</div>
      <div className="block lg:hidden">
        <SideBarContainer
          title={`التصفية`}
          openSideBar={openFilters}
          setOpenSideBar={setOpenFilters}
        >
          {sideFilter}
        </SideBarContainer>
      </div>
    </>
  );
}
