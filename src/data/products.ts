import imgHeadphones from "@/assets/product-headphones.jpg";
import imgSmartwatch from "@/assets/product-smartwatch.jpg";
import imgDenimJacket from "@/assets/product-denim-jacket.jpg";
import imgTshirt from "@/assets/product-tshirt.jpg";
import imgBackpack from "@/assets/product-backpack.jpg";
import imgLamp from "@/assets/product-lamp.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

export const categories = [
  { slug: "electronics", name: "Electronics", description: "Gadgets & devices" },
  { slug: "clothing", name: "Clothing", description: "Apparel & fashion" },
  { slug: "accessories", name: "Accessories", description: "Bags, watches & more" },
  { slug: "home", name: "Home & Living", description: "Furniture & decor" },
];

export const products: Product[] = [
  { id: "e1", name: "Wireless Headphones", description: "Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear audio.", price: 149.99, image: imgHeadphones, category: "electronics", brand: "AudioTech" },
  { id: "e2", name: "Smart Watch Pro", description: "Feature-packed smartwatch with health monitoring, GPS, and a stunning AMOLED display.", price: 299.99, image: imgSmartwatch, category: "electronics", brand: "WristGear" },
  { id: "c1", name: "Classic Denim Jacket", description: "Timeless denim jacket with a modern slim fit. Durable and stylish for all seasons.", price: 89.99, image: imgDenimJacket, category: "clothing", brand: "UrbanWear" },
  { id: "c2", name: "Cotton Crew T-Shirt", description: "Soft 100% organic cotton t-shirt with a relaxed fit and premium feel.", price: 29.99, image: imgTshirt, category: "clothing", brand: "BasicCo" },
  { id: "a1", name: "Leather Backpack", description: "Handcrafted full-grain leather backpack with padded laptop compartment.", price: 189.99, image: imgBackpack, category: "accessories", brand: "CraftBag" },
  { id: "h1", name: "Ceramic Table Lamp", description: "Handmade ceramic table lamp with linen shade. Warm ambient lighting.", price: 99.99, image: imgLamp, category: "home", brand: "LumiCraft" },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.category === categorySlug);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () => products;
