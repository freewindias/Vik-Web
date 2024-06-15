"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./modeToggle";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Collection",
    href: "/collection",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="mb-8">
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-6">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">V<span className="text-primary">B</span></h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <ModeToggle />

      </div>
    </header>
  );
}
