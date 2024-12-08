"use client";

import Link from "next/link";

const navigationItems = [
  { label: "Shop", href: "/shop" },
  { label: "On Sale", href: "/sale" },
  { label: "New Arrivals", href: "/new" },
  { label: "Brands", href: "/brands" },
];

export function NavigationMenu() {
  return (
    <nav className="hidden md:flex items-center space-x-10">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}