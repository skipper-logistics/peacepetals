"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

interface FacilityItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

interface FacilitiesProps {
  initialFacilities?: any[];
}

export default function Facilities({ initialFacilities }: FacilitiesProps) {
  const [activeImage, setActiveImage] = useState<FacilityItem | null>(null);

  const defaultItems: FacilityItem[] = [
    {
      id: 1,
      src: "/peacepetalssampleimg1.jpeg",
      title: "The Serenity Consultation Room",
      subtitle: "Comfort & Safety",
      description: "A softly lit, warm environment designed to make you feel safe and comfortable during your one-on-one sessions. Featuring comfortable seating, noise dampening, and relaxing natural materials.",
    },
    {
      id: 2,
      src: "/peacepetalssampleimg2.jpeg",
      title: "The Mindfulness Sanctuary",
      subtitle: "Meditation & Yoga",
      description: "A spacious, natural wooden hall bathed in sunlight, used for group workshops, sound baths, yoga, and breathwork sessions. Designed with calming plants and floor cushions.",
    },
    {
      id: 3,
      src: "/peacepetalssampleimg3.jpeg",
      title: "Welcoming Reception Lobby",
      subtitle: "A Peaceful Welcome",
      description: "Step into immediate tranquility. Our welcoming lobby features a soft tea bar, warm dimmable lights, and therapeutic literature to help you settle in before your session starts.",
    },
    {
      id: 4,
      src: "/peacepetalssampleimg4.jpeg",
      title: "The Healing Garden Terrace",
      subtitle: "Outdoor Somatic Spaces",
      description: "A lush, outdoor botanical terrace designated for therapeutic walks, nature-based counseling, or quiet reflection after sessions. Fresh air and soft water fountains assist grounding.",
    },
  ];

  const items: FacilityItem[] =
    initialFacilities && initialFacilities.length > 0
      ? initialFacilities.map((f: any, idx: number) => ({
          id: idx + 1,
          src: f.image && f.image.url ? f.image.url : "/peacepetalssampleimg1.jpeg",
          title: f.title,
          subtitle: f.subtitle,
          description: f.description,
        }))
      : defaultItems;

  return (
    <section id="facilities" className="py-24 bg-brand-lavender/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-primary font-semibold mb-4">
            Our Soothing Healing Sanctuary
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 font-sans leading-relaxed">
            Step into environments crafted specifically to calm your nervous system, encourage reflection, and cultivate deep emotional safety.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-brand-primary/5 rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-primary/5">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Visual Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button
                    onClick={() => setActiveImage(item)}
                    className="p-3 rounded-full bg-white/95 text-brand-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105"
                    aria-label="Enlarge Image"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
                {/* Category Tag overlay */}
                <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                  {item.subtitle}
                </span>
              </div>

              {/* Text Information */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-brand-primary font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-primary/5 flex justify-end">
                  <button
                    onClick={() => setActiveImage(item)}
                    className="text-sm font-semibold text-brand-secondary hover:text-brand-primary transition-colors focus:outline-none"
                  >
                    Take Virtual Tour &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Enlarged View */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-96 md:h-[450px] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 bg-brand-cream border-t border-brand-primary/5">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-wider">
                {activeImage.subtitle}
              </span>
              <h3 className="text-2xl font-serif text-brand-primary font-semibold mt-1 mb-3">
                {activeImage.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-light">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
