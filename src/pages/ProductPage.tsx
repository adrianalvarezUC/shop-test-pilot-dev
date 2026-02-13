import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { pushViewItem, pushAddToCart } from "@/lib/dataLayer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) pushViewItem(product);
  }, [id]);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Back to Home</Link>
      </main>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    pushAddToCart(product, qty);
    toast({ title: "Added to cart", description: `${qty}× ${product.name}` });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Link to={`/category/${product.category}`} className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground">
        ← Back to {product.category}
      </Link>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg bg-muted">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <h1 className="mt-1 text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-md border">
              <Button variant="ghost" size="icon" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium">{qty}</span>
              <Button variant="ghost" size="icon" onClick={() => setQty((q) => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={handleAdd} className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
