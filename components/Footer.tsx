"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-primary text-brand-cream pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-secondary/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            {/* Logo Beside Title Layout */}
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-14 overflow-hidden filter brightness-0 invert">
                <Image
                  src="/logo.svg"
                  alt="Peace Petal Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="relative h-5 w-40 filter brightness-0 invert">
                  <Image
                    src="/logotitle.svg"
                    alt="Peace Petal Center"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative h-3 w-32 mt-1 filter brightness-0 invert opacity-80">
                  <Image
                    src="/logotext.svg"
                    alt="Nurturing Peace, Petal by Petal"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-brand-cream/75 leading-relaxed font-light">
              Nurturing mental clarity, emotional resilience, and spiritual grounding. A safe harbor for your personal growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/peacepetals_counseling?igsh=MTVicXRmaHMxbmozYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-brand-cream hover:bg-brand-rose hover:text-white hover:border-brand-rose transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-rose mb-6">
              Sanctuary Links
            </h4>
            <ul className="space-y-4 text-sm font-light text-brand-cream/80">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Therapy Services
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Sanctuary & Rooms
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Upcoming Workshops
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-white transition-colors">
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-rose mb-6">
              Sanctuary Hours
            </h4>
            <ul className="space-y-4 text-sm font-light text-brand-cream/85">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p className="text-xs text-brand-cream/70">9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Saturday</p>
                  <p className="text-xs text-brand-cream/70">10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" opacity={0.5} />
                <div>
                  <p className="font-semibold text-white/50">Sunday</p>
                  <p className="text-xs text-brand-cream/40">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-rose mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm font-light text-brand-cream/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-rose shrink-0" />
                <span>
                  108 Lotus Petal Avenue, <br />
                  Suite 200, Calm Valley, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-rose shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-rose shrink-0" />
                <a href="mailto:hello@peacepetalcenter.com" className="hover:text-white transition-colors">
                  hello@peacepetalcenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-brand-cream/65">
          <p>&copy; {new Date().getFullYear()} Peace Petal Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
