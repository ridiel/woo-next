import { navbarData } from "@/data/navbar";
import { Button } from "../ui/button";
import { LucideSidebar, LucideSidebarClose } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "../cart";

export const ProductGridHeader = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="container mx-auto p-4 flex justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsToggle(!isToggle)}
        >
          {isToggle ? <LucideSidebarClose /> : <LucideSidebar />}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>

        {isToggle && (
          <div className="w-full flex gap-x-10 items-center justify-center">
            {navbarData.map(item => (
              <Link key={item.id} href={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
        )}

        <ShoppingCart />
      </div>
    </header>
  );
};
