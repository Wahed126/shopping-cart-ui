import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responce = await fetch("http://localhost:8000/products");
        if (!responce.ok) throw new Error("Faild to fetch products");
        const data = await responce.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Porduct Catalog</h1>

      {loading && <p>Loading....</p>}
      {error && <div className="error">{error}</div>}

      <ProductList products={products} />
    </div>
  );
};

export default App;
