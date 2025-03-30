import { Product } from "@/types/product";
import { LucideImage } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Pick<Product, "id" | "name" | "images" | "price">;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      key={product.id}
      href={`/product/${product.id}`}
      className="flex flex-col group relative"
    >
      <div className="aspect-[1.52] overflow-hidden rounded-md border">
        {product.images.length > 0 && product.images[0].src ? (
          <Image
            className="aspect-[1.52] object-cover p-2"
            src={product.images[0].src}
            alt={product.name}
            width={300}
            height={300}
          />
        ) : (
          <div className="aspect-[1.52] object-cover p-2">
            <LucideImage className="size-24" />
          </div>
        )}
      </div>
    </Link>
  );
};
