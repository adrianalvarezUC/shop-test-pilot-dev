import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { pushViewCart } from "@/lib/dataLayer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length) pushViewCart(items);
  }, []);

  if (!items.length) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 rounded-lg border p-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded bg-muted">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link to={`/product/${product.id}`} className="font-medium hover:underline">{product.name}</Link>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-md border">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.id, quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm">{quantity}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.id, quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="font-semibold">${(product.price * quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeFromCart(product.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$9.99</span></div>
            <div className="flex justify-between"><span>Tax (8%)</span><span>${(totalPrice * 0.08).toFixed(2)}</span></div>
            <div className="my-2 border-t" />
            <div className="flex justify-between text-base font-bold">
              <span>Total</span>
              <span>${(totalPrice + 9.99 + totalPrice * 0.08).toFixed(2)}</span>
            </div>
          </div>
          <Button className="mt-6 w-full" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
