import { useState, useEffect } from "react";
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rouded-lg shadow p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>
            <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
