import { useState } from "react";
import { products } from "../data/aureliaData";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search luxury jewellery..."
        className="w-full mb-12"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
