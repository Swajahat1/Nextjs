// "use client";

// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// export function FeaturedProducts() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulated product data
//     const dummyProducts = [
//       {
//         id: 1,
//         title: "Casual Denim Jacket",
//         price: 89.99,
//         image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80",
//       },
//       {
//         id: 2,
//         title: "Classic White Sneakers",
//         price: 69.99,
//         image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
//       },
//       {
//         id: 3,
//         title: "Cotton T-Shirt",
//         price: 29.99,
//         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
//       },
//       {
//         id: 4,
//         title: "Leather Backpack",
//         price: 119.99,
//         image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80",
//       },
//     ];

//     setTimeout(() => {
//       setProducts(dummyProducts);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <section className="py-20 bg-secondary/50">
//       <div className="container">
//         <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {loading
//             ? Array(4)
//                 .fill(null)
//                 .map((_, i) => (
//                   <Card key={i} className="p-4">
//                     <Skeleton className="h-[200px] w-full mb-4" />
//                     <Skeleton className="h-4 w-2/3 mb-2" />
//                     <Skeleton className="h-4 w-1/3" />
//                   </Card>
//                 ))
//             : products.map((product) => (
//                 <Card key={product.id} className="overflow-hidden group cursor-pointer">
//                   <div className="relative aspect-square">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="object-cover w-full h-full transition-transform group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-medium">{product.title}</h3>
//                     <p className="text-lg font-bold mt-1">${product.price}</p>
//                   </div>
//                 </Card>
//               ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

const newArrivals = [
  {
    id: 1,
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    originalPrice: 232,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/selling/stripped.png",
  },
  {
    id: 2,
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 125,
    rating: 3.5,
    totalRatings: 5,
    image: "/images/selling/graphic.png",
    
  },
  {
    id: 3,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/selling/shorts.png",
  },
  {
    id: 4,
    title: "FADED SKINNY JEANS",
    price: 210,
    rating: 4.5,
    totalRatings: 5,
    image: "/images/selling/jeans.png",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Top Selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}