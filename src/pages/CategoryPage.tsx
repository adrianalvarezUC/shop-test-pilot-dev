import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories, getProductsByCategory } from "@/data/products";
import { pushViewItemList } from "@/lib/dataLayer";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const products = getProductsByCategory(slug || "");

  useEffect(() => {
    if (category && products.length) {
      pushViewItemList(category.name, products);
    }
  }, [slug]);

  if (!category) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">{category.name}</h1>
      <p className="mb-8 text-muted-foreground">{category.description}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
