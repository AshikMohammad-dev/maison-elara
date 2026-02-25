import { useState, useEffect } from "react";
import ProductCard from "../ui/ProductCard";
import ProductModal from "../ui/ProductModal";

import { db } from "../../firebase/firebase";

import {
  collection,
  onSnapshot
} from "firebase/firestore";

function Products({ activeCategory, searchQuery }) {

  // Selected product modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Firebase products
  const [products, setProducts] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);


  // ===============================
  // FIREBASE REALTIME FETCH
  // ===============================
  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        // order support
        data.sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        );

        setProducts(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, []);


  // ===============================
  // FILTER LOGIC
  // ===============================

  let filteredProducts = [...products];


  // ✅ CATEGORY FILTER
  if (activeCategory) {

    const normalizedCategory =
      activeCategory.trim().toLowerCase();

    filteredProducts = filteredProducts.filter((p) =>

      (p.category || "")
        .trim()
        .toLowerCase()
        === normalizedCategory

    );
  }


  // ✅ SEARCH FILTER
  if (searchQuery) {

    const query =
      searchQuery.trim().toLowerCase();

    filteredProducts = filteredProducts.filter((p) => {

      const name =
        (p.name || "").toLowerCase();

      const category =
        (p.category || "").toLowerCase();

      return (
        name.includes(query) ||
        category.includes(query)
      );

    });

  }


  // ===============================
  // UI
  // ===============================
  return (

    <section
      className="featured container"
      id="products"
    >

      <h2 className="section-title">

        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : activeCategory
          ? `${activeCategory} Collection`
          : "Curated Pieces"}

      </h2>


      {/* Loading */}
      {loading ? (

        <div className="empty-state">
          <p>Loading products...</p>
        </div>

      ) : filteredProducts.length === 0 ? (

        <div className="empty-state">
          <p>No products found.</p>
        </div>

      ) : (

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />

          ))}

        </div>

      )}


      {/* PRODUCT MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() =>
          setSelectedProduct(null)
        }
      />

    </section>

  );
}

export default Products;