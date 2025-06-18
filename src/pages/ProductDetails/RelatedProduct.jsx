import GlobalTitle from "../../components/common/GlobalTitle";
import ProductList from "../../components/Product/ProductList";
import { productsList } from "../../data/data";

const RelatedProduct = () => {
  return (
    <section className="container sectionPadding">
      <GlobalTitle title={"منتجات ذات صلة"} />

      <ProductList products={productsList.slice(0, 4)} />
    </section>
  );
};

export default RelatedProduct;
