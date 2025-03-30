"use client";

import { Product } from "@/types/product";
import { ProductGridHeader } from "./product-grid-header";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: Pick<Product, "id" | "name" | "images" | "price">[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="min-h-screen bg-white">
      <ProductGridHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};
