"use client";

import React from "react";
import { ArrowRight, Leaf, Shield, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-brand-lavender/40 via-brand-cream to-white">
      {/* Soothing Ambient Background Shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-rose/20 filter blur-3xl animate-breathe-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-secondary/5 filter blur-3xl animate-breathe-slower" />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-brand-primary/5 filter blur-3xl animate-breathe-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-secondary/8 text-brand-secondary text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in border border-brand-secondary/10">
          <Leaf className="w-3.5 h-3.5" />
          A Sanctuary for Your Mind & Soul
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-primary leading-tight tracking-tight max-w-4xl mx-auto mb-6">
          Find Your Inner Peace, <br />
          <span className="italic font-normal text-brand-secondary">Petal by Petal</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Welcome to Peace Petal Center. We provide a gentle, supportive, and professional space for counselling, therapy, and healing. Let us guide you back to clarity, balance, and well-being.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#book"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-brand-primary/20 hover:border-brand-primary bg-white/60 hover:bg-white text-brand-primary font-medium transition-all duration-300 hover:shadow-sm"
          >
            Explore Services
          </a>
        </div>

        {/* Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8 border-t border-brand-primary/5">
          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4 shadow-inner">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-brand-primary font-semibold mb-2">Safe & Confidential</h3>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              Every session is fully private, offering you a secure container to share and process life's challenges.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-rose/30 flex items-center justify-center text-brand-primary mb-4 shadow-inner">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-brand-primary font-semibold mb-2">Compassionate Care</h3>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              Our therapists listen with empathy and respect, tailoring approaches to your unique rhythm and needs.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent mb-4 shadow-inner">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-brand-primary font-semibold mb-2">Holistic Healing</h3>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              We integrate body, mind, and spirit to foster deep self-awareness, peace, and long-term resilience.
            </p>
          </div>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-white fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,94.38,25.93,179.88,43.4,262.38,67.22,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
