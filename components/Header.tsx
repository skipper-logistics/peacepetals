"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo Container */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-12 w-14 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="Peace Petal Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="relative h-5 w-40 sm:w-44">
                <Image
                  src="/logotitle.svg"
                  alt="Peace Petal Center"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
              <div className="relative h-3 w-32 sm:w-36 mt-1 opacity-80">
                <Image
                  src="/logotext.svg"
                  alt="Nurturing Peace, Petal by Petal"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-brand-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#facilities"
              className="text-sm font-medium text-foreground/80 hover:text-brand-primary transition-colors"
            >
              Sanctuary
            </a>
            <a
              href="#events"
              className="text-sm font-medium text-foreground/80 hover:text-brand-primary transition-colors"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-brand-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.instagram.com/peacepetals_counseling?igsh=MTVicXRmaHMxbmozYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-brand-primary transition-colors p-2 rounded-full hover:bg-brand-primary/5 flex items-center justify-center"
              aria-label="Instagram Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Book Session
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground/85 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-lg border-t border-brand-primary/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 flex flex-col gap-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-base font-medium text-foreground/85 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#facilities"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-base font-medium text-foreground/85 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
          >
            Sanctuary & Facilities
          </a>
          <a
            href="#events"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-base font-medium text-foreground/85 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
          >
            Events & Workshops
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-base font-medium text-foreground/85 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
          >
            Contact Info
          </a>
          <a
            href="https://www.instagram.com/peacepetals_counseling?igsh=MTVicXRmaHMxbmozYg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-brand-primary/20 text-foreground/85 font-medium transition-colors hover:bg-brand-primary/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-primary">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            Follow on Instagram
          </a>
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-primary text-white font-medium transition-colors hover:bg-brand-primary/95 mt-1"
          >
            <Calendar className="w-4 h-4" />
            Book Session
          </a>
        </div>
      </div>
    </header>
  );
}
