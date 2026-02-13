import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { pushBeginCheckout, pushPurchase } from "@/lib/dataLayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!items.length) {
      navigate("/cart");
      return;
    }
    pushBeginCheckout(items);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const txId = "TXN-" + Date.now();
    pushPurchase(txId, items);
    clearCart();
    setTimeout(() => navigate(`/thank-you?order=${txId}`), 500);
  };

  if (!items.length) return null;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
          <fieldset className="space-y-4 rounded-lg border p-6">
            <legend className="px-2 text-lg font-semibold">Shipping Information</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required defaultValue="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" required defaultValue="123 Main Street" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required defaultValue="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" required defaultValue="NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Zip Code</Label>
                <Input id="zip" required defaultValue="10001" />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-lg border p-6">
            <legend className="px-2 text-lg font-semibold">Payment Details</legend>
            <div className="space-y-2">
              <Label htmlFor="card">Card Number</Label>
              <Input id="card" required defaultValue="4111 1111 1111 1111" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry</Label>
                <Input id="expiry" required defaultValue="12/28" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" required defaultValue="123" />
              </div>
            </div>
          </fieldset>

          <Button type="submit" className="w-full" size="lg" disabled={submitting}>
            {submitting ? "Processing…" : "Place Order"}
          </Button>
        </form>

        <div className="rounded-lg border p-6 h-fit">
          <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
          <div className="space-y-3">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span>{product.name} × {quantity}</span>
                <span>${(product.price * quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$9.99</span></div>
            <div className="flex justify-between"><span>Tax (8%)</span><span>${(totalPrice * 0.08).toFixed(2)}</span></div>
            <div className="mt-2 border-t pt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(totalPrice + 9.99 + totalPrice * 0.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
