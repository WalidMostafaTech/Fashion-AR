import BreadCrumb from "../../../components/common/BreadCrumb";
import Colors from "./Colors";
import Details from "./Details";
import ProductSlider from "./ProductSlider";
import ProductTap from "./ProductTap";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
  return (
    <article>
      <BreadCrumb
        title={"تفاصيل اللعبه"}
        links={[
          { url: "/", label: "الرئيسية" },
          { url: "/products-details", label: "تفاصيل اللعبه" },
        ]}
      />

      <section className="container py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <ProductSlider />
        <Details />
        <Colors />
      </section>

      <ProductTap />

      <RelatedProduct />
    </article>
  );
};

export default ProductDetails;
