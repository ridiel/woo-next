import { LucideMinus } from "lucide-react";

import { LucidePlus } from "lucide-react";
import { LucideTrash } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "@/providers/cart-context";

interface InputQuantityProps {
  item: CartItem;
}

export const InputQuantity = ({ item }: InputQuantityProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity === 1}
      >
        <LucideMinus />
      </Button>

      <span>{item.quantity}</span>

      <Button
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        disabled={item.quantity === 10}
      >
        <LucidePlus />
      </Button>

      <Button variant="outline" size="icon" onClick={() => removeItem(item.id)}>
        <LucideTrash />
      </Button>
    </div>
  );
};
