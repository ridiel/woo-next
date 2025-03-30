import { CartItem as CartItemType } from "@/providers/cart-context";
import { LucideImage } from "lucide-react";
import Image from "next/image";
import { InputQuantity } from "./product/input-quantity";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <li className="flex gap-4">
      <div className="size-24 flex-shrink-0 overflow-hidden rounded-md border p-2">
        {item.images[0].src ? (
          <Image
            src={item.images[0].src}
            alt={item.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <LucideImage className="size-24" />
        )}
      </div>

      <div className="flex flex-col flex-1">
        <p className="text-sm font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">
          {item.quantity} x {item.price}
        </p>

        <InputQuantity item={item} />
      </div>
    </li>
  );
};
