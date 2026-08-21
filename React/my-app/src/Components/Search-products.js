import { useEffect, useState } from "react";

export default function SearchProduct({ showSearch }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  // Get all Baroque products
  useEffect(() => {
    fetch("http://localhost:5555/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products:", data);

        // If your API directly returns an array
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  // Search products
  const filteredProducts = products.filter((product) => {
    const productName = product.Name || "";

    return productName
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  if (!showSearch) {
    return null;
  }

  return (
    <div className="search-box">

      <input
        autoFocus
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Baroque products..."
      />

      {query && (
        <ul className="search-results">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product._id} className="search-product-item">

                {product.Name}

              </li>
            ))
          ) : (
            <li className="no-results">
              No products found
            </li>
          )}

        </ul>
      )}

    </div>
  );
}