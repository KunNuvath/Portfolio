"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f4f0]/90 backdrop-blur-sm border-b border-[#e8e6e0]">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-14 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); setMenuOpen(false); }}
          className="font-[family-name:var(--font-syne)] font-black text-sm tracking-tight text-[#111] flex items-center gap-2"
        > 
          Portfolio
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-sm text-[#888] hover:text-[#111] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex rounded-full px-5"
            onClick={() => scrollTo("#contact")}
          >
            Hire Me
          </Button>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#111] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#111] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#111] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e8e6e0] bg-[#f5f4f0] px-4 py-4 space-y-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); setMenuOpen(false); }}
              className="block py-3 text-sm text-[#555] hover:text-[#111] border-b border-[#eee] last:border-0 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <Button
              variant="default"
              size="sm"
              className="w-full rounded-full"
              onClick={() => { scrollTo("#contact"); setMenuOpen(false); }}
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}