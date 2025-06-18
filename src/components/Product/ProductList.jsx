import ProductItem from "./ProductItem";

const ProductList = ({ products, columns }) => {
  const getGridColsClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-2 md:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-2 md:grid-cols-3 2xl:grid-cols-4";
    }
  };
  return (
    <div className={`grid ${getGridColsClass()} gap-4`}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
