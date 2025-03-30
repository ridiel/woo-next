"use client";

import { useCart } from "@/hooks/use-cart";
import { CheckoutButton } from "../checkout-button";
export const ProductAction = () => {
  const { items: cartItems, cartTotal } = useCart();

  return (
    <div className="rounded-lg bg-amber-50 p-6 sticky top-20 flex h-[80vh]">
      <div className="flex flex-col gap-2">
        <div>
          <div className="grid grid-cols-3 gap-4 pb-2 border-b text-base font-medium">
            <div>Product</div>
            <div className="text-center">Q</div>
            <div className="text-right">Price</div>
          </div>

          {cartItems.map(item => (
            <div
              key={item.id}
              className="grid grid-cols-3 gap-4 pb-2 border-b text-sm"
            >
              <div>{item.name}</div>
              <div className="text-center">{item.quantity}</div>
              <div className="text-right">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <div className="flex justify-between w-full gap-2">
            <div className="text-sm font-medium">Subtotal</div>
            <div className="text-sm">{cartTotal}</div>
          </div>
        </div>

        <CheckoutButton />
      </div>
    </div>
  );
};
