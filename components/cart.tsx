import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { LucideShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "./cart-item";
import { CheckoutButton } from "./checkout-button";

export const ShoppingCart = () => {
  const { items: cartItems, isOpen, setIsOpen, cartTotal } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-x-2">
          <LucideShoppingCart />
          <span>Cart</span>
          {cartItems.length > 0 && (
            <span className="bg-blue-500 text-white rounded-full px-2 py-1">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-sm text-gray-500 flex flex-col items-center gap-y-2">
              <LucideShoppingCart className="size-8" />
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto py-6">
              <ul className="space-y-6">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-sm font-medium">{cartTotal}</p>
              </div>

              <CheckoutButton />
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
