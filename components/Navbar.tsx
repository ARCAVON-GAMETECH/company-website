"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Our Games", href: "/games" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Join Community", href: "/#community" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-lg shadow-lg shadow-cyan-500/5" : "bg-black/70 backdrop-blur-md"} border-b border-white/10`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 md:py-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/arcavon_logo.png"
              alt="Arcavon Logo"
              fill
              className="object-contain drop-shadow-[0_0_10px_rgba(0,194,255,0.6)]"
              priority
            />
          </div>
          <span className={`text-base sm:text-lg md:text-xl tracking-[0.15em] sm:tracking-[0.2em] text-white font-[family-name:var(--font-chakra)] font-bold group-hover:text-cyan-300 transition-colors duration-300`}>
            ARCAVON
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 tracking-wider uppercase whitespace-nowrap group font-[family-name:var(--font-inter)]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col bg-black/95 border-t border-white/10 backdrop-blur-xl px-6 py-6 gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 uppercase tracking-widest py-3 px-4 rounded-lg border-l-2 border-transparent hover:border-cyan-400 font-[family-name:var(--font-inter)]"
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
