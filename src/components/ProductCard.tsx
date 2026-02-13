import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`}>
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground">{product.brand}</p>
        <h3 className="mt-1 font-medium leading-tight">{product.name}</h3>
        <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  </Link>
);

export default ProductCard;
