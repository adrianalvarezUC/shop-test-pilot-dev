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
  // Electronics
  { id: "e1", name: "Wireless Headphones", description: "Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear audio.", price: 149.99, image: "/placeholder.svg", category: "electronics", brand: "AudioTech" },
  { id: "e2", name: "Smart Watch Pro", description: "Feature-packed smartwatch with health monitoring, GPS, and a stunning AMOLED display.", price: 299.99, image: "/placeholder.svg", category: "electronics", brand: "WristGear" },
  { id: "e3", name: "Portable Speaker", description: "Waterproof Bluetooth speaker with 360° sound and 12 hours of playtime.", price: 79.99, image: "/placeholder.svg", category: "electronics", brand: "AudioTech" },
  { id: "e4", name: "USB-C Hub Adapter", description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.", price: 49.99, image: "/placeholder.svg", category: "electronics", brand: "ConnectPro" },

  // Clothing
  { id: "c1", name: "Classic Denim Jacket", description: "Timeless denim jacket with a modern slim fit. Durable and stylish for all seasons.", price: 89.99, image: "/placeholder.svg", category: "clothing", brand: "UrbanWear" },
  { id: "c2", name: "Cotton Crew T-Shirt", description: "Soft 100% organic cotton t-shirt with a relaxed fit and premium feel.", price: 29.99, image: "/placeholder.svg", category: "clothing", brand: "BasicCo" },
  { id: "c3", name: "Slim Fit Chinos", description: "Versatile chinos with a comfortable stretch fabric. Perfect for work or weekend.", price: 59.99, image: "/placeholder.svg", category: "clothing", brand: "UrbanWear" },
  { id: "c4", name: "Merino Wool Sweater", description: "Luxuriously soft merino wool sweater that regulates temperature naturally.", price: 119.99, image: "/placeholder.svg", category: "clothing", brand: "NordicKnit" },

  // Accessories
  { id: "a1", name: "Leather Backpack", description: "Handcrafted full-grain leather backpack with padded laptop compartment.", price: 189.99, image: "/placeholder.svg", category: "accessories", brand: "CraftBag" },
  { id: "a2", name: "Aviator Sunglasses", description: "Classic aviator sunglasses with polarized lenses and UV400 protection.", price: 69.99, image: "/placeholder.svg", category: "accessories", brand: "SunStyle" },
  { id: "a3", name: "Minimalist Watch", description: "Elegant minimalist watch with Japanese movement and genuine leather strap.", price: 129.99, image: "/placeholder.svg", category: "accessories", brand: "TimeKeep" },

  // Home & Living
  { id: "h1", name: "Ceramic Table Lamp", description: "Handmade ceramic table lamp with linen shade. Warm ambient lighting.", price: 99.99, image: "/placeholder.svg", category: "home", brand: "LumiCraft" },
  { id: "h2", name: "Throw Blanket", description: "Cozy knitted throw blanket made from recycled cotton. 130×170 cm.", price: 49.99, image: "/placeholder.svg", category: "home", brand: "CozyHome" },
  { id: "h3", name: "Scented Candle Set", description: "Set of 3 hand-poured soy candles in lavender, vanilla, and cedarwood.", price: 34.99, image: "/placeholder.svg", category: "home", brand: "LumiCraft" },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.category === categorySlug);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () =>
  [products[0], products[4], products[8], products[11], products[1], products[5]];
