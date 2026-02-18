import { useEffect } from "react";
import { Link } from "react-router-dom";
import { categories, getFeaturedProducts } from "@/data/products";
import { pushViewItemList } from "@/lib/dataLayer";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  const featured = getFeaturedProducts();

  useEffect(() => {
    pushViewItemList("Featured Products", featured);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="mb-12 rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My SandBox</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
          A demo ecommerce site for testing
        </p>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Shop by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/category/${cat.slug}`}>
              <Card className="transition-shadow hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{cat.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
