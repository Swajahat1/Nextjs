"use client";

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu } from "@/components/navigation/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">

<div className="bg-black text-white py-2 text-center text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%! <Link href="/shop" className="underline">ShopNow</Link></p>
      </div>

      <div className="container flex h-15 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold">
            SHOP.CO
          </Link>
          <NavigationMenu />
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative w-80">
            <Input
              placeholder="Search for products..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>

          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
        </div>
      </div>
    </header>
  );
}