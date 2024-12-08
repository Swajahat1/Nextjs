import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-background py-20">
      <div className="container flex items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl font-bold tracking-tight">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <Button size="lg" className="text-lg px-8">
          <Link href="project\app\pages\product.tsx" className="">ShopNow</Link>
          </Button>
        </div>
        <div className="flex- relative">
          <img
            src="/images/products/hero.png"
            alt="Fashion model"
            className="rounded-lg object-cover w-full h-[600px]"
          />
          <div className="absolute -top-4 -right-4 w-24 h-24">
            <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
              <path
                fill="currentColor"
                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}