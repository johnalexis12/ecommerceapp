import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 15.99 },
        { id: 3, name: "Product 3", price: 7.99 },
      ];
      setProducts(data);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
