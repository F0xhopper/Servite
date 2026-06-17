"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
  { label: "Our Story", href: "/our-story" },
  { label: "Spirituality", href: "/spirituality" },
  { label: "Saints", href: "/saints" },
  { label: "Events", href: "/events" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/servite_logo.png"
              alt="Secular Order of the Servants of Mary"
              width={52}
              height={62}
              style={{ width: "auto", height: "62px" }}
              priority
            />
            <span className="hidden flex-col sm:flex">
              <span className="text-[12px] font-light tracking-[0.18em] text-white/70">
                Secular Order of the Servants of Mary
              </span>
              <span className="text-[10px] tracking-[0.35em] text-gold/40 uppercase">
                OSSM
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {links.map(({ label, href }) => (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink
                      href={href}
                      className="text-sm tracking-wider text-white/60 hover:bg-transparent hover:text-gold focus:bg-transparent"
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/inquire"
              className="text-sm tracking-wider border border-gold/40 px-4 py-1.5 text-gold/70 transition-colors hover:border-gold hover:text-gold"
            >
              Become a Member
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center text-white/60 transition-colors hover:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black pt-16 lg:hidden">
          <nav className="flex flex-col gap-6 px-8 py-12">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xl font-light tracking-wider text-white/60 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-6 h-px w-12 bg-gold/30" />
            <Link
              href="/inquire"
              className="mt-2 inline-block border border-gold/40 px-6 py-3 text-base tracking-wider text-gold/70 transition-colors hover:border-gold hover:text-gold"
              onClick={() => setOpen(false)}
            >
              Become a Member
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
