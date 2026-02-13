import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  const [params] = useSearchParams();
  const orderId = params.get("order") || "N/A";

  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-600" />
      <h1 className="mt-6 text-3xl font-bold">Thank You for Your Order!</h1>
      <p className="mt-2 text-muted-foreground">Your order has been placed successfully.</p>
      <p className="mt-4 rounded bg-muted px-4 py-2 font-mono text-sm">Order ID: {orderId}</p>
      <Button asChild className="mt-8">
        <Link to="/">Continue Shopping</Link>
      </Button>
    </main>
  );
};

export default ThankYouPage;
