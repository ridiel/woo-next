"use client";

import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";

interface ProductQuantityProps {
  product: Product;
}

export const ProductQuantity = ({ product }: ProductQuantityProps) => {
  const { addItem: addToCart, updateQuantity, items: cartItems } = useCart();

  const currProductQuantity =
    cartItems.find(item => item.id === product.id)?.quantity || 0;

  const handleQuantityChange = (quantity: number) => {
    const findProduct = cartItems.find(item => item.id === product.id);
    if (findProduct) {
      updateQuantity(findProduct.id, quantity);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="flex items-center space-x-2 justify-center">
      {[...Array(10)].map((_, index) => (
        <span
          onClick={() => handleQuantityChange(index + 1)}
          key={index + 1}
          className={cn(
            "w-10 h-10 inline-flex bg-gray-200 rounded-full items-center justify-center",
            {
              "bg-gray-500": index + 1 === currProductQuantity,
            }
          )}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};
