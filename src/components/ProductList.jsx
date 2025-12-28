import ProductCart from "./ProductCart";

import { useProducts } from "../context/ProductContext";
const ProductList = () => {
  const { products, loading, error } = useProducts(useProducts);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading ...</p>}
      {error && <div className="error">{error}</div>}
      {products.map((product) => (
        <ProductCart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
