import { products } from "../data/aureliaData";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl text-center mb-14 tracking-wide">
        Featured Creations
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
