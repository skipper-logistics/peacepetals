"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Users, Heart, CheckCircle2 } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
  capacity: string;
  category: string;
  description: string;
}

interface EventsProps {
  initialEvents?: any[];
}

export default function Events({ initialEvents }: EventsProps) {
  const [reservedEvent, setReservedEvent] = useState<string | null>(null);

  const defaultEvents: EventItem[] = [
    {
      id: "ev-1",
      title: "Mindfulness & Healing Circle",
      date: "Saturday, June 20, 2026",
      time: "10:00 AM - 11:30 AM",
      location: "Mindfulness Sanctuary & Garden",
      host: "Dr. Evelyn Rose, PhD",
      capacity: "12 spots left",
      category: "Group Meditation",
      description: "A gentle group gathering focused on heart-opening breathwork, calming acoustic sound healing, and reflective sharing to establish a deeper sense of grounding.",
    },
    {
      id: "ev-2",
      title: "Anxiety & Stress Reduction Workshop",
      date: "Wednesday, June 24, 2026",
      time: "6:30 PM - 8:00 PM",
      location: "Conference Studio & Online Hybrid",
      host: "Mark Peterson, LMFT",
      capacity: "6 spots left",
      category: "Educational",
      description: "Learn practical, somatic coping tools and CBT-based strategies to navigate daily stressors, regulate your nervous system, and set healthy boundaries in life.",
    },
    {
      id: "ev-3",
      title: "Introduction to Art & Expression Therapy",
      date: "Sunday, June 28, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Therapeutic Art Space",
      host: "Sarah Chen, ATR-BC",
      capacity: "4 spots left",
      category: "Art Therapy",
      description: "No art experience required. Discover the calming power of creative self-expression. We supply all materials for painting, sculpting, and reflection exercises.",
    },
  ];

  const events: EventItem[] =
    initialEvents && initialEvents.length > 0
      ? initialEvents.map((ev: any) => ({
          id: ev.id,
          title: ev.title,
          date: ev.date,
          time: ev.time,
          location: ev.location,
          host: ev.host,
          capacity: ev.capacity,
          category: ev.category,
          description: ev.description,
        }))
      : defaultEvents;

  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-primary font-semibold mb-4">
            Upcoming Community Events & Workshops
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 font-sans leading-relaxed">
            Join our group workshops, therapeutic seminars, and community support circles to heal and grow alongside others in a gentle environment.
          </p>
        </div>

        {/* Events Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {events.map((ev) => {
            const isReserved = reservedEvent === ev.id;
            return (
              <div
                key={ev.id}
                className="bg-brand-cream/35 border border-brand-primary/5 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-brand-secondary/25 transition-all duration-300 hover:shadow-sm"
              >
                {/* Event Left Side Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-primary/8 text-brand-primary text-xs font-semibold uppercase tracking-wider">
                      {ev.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-secondary font-medium">
                      <Users className="w-3.5 h-3.5" />
                      {ev.capacity}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-brand-primary font-bold mb-3">
                    {ev.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground/75 mb-6 font-light leading-relaxed">
                    {ev.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-secondary shrink-0" />
                      <span>
                        {ev.date} <br />
                        <span className="text-xs text-foreground/50">{ev.time}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-secondary shrink-0" />
                      <span>{ev.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-brand-secondary shrink-0" />
                      <span>Led by {ev.host}</span>
                    </div>
                  </div>
                </div>

                {/* Event Right Side Action Button */}
                <div className="flex items-center lg:justify-center shrink-0 border-t border-brand-primary/5 pt-6 lg:border-t-0 lg:pt-0">
                  {isReserved ? (
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-secondary/15 text-brand-secondary text-sm font-semibold border border-brand-secondary/20 animate-scale-up">
                      <CheckCircle2 className="w-4 h-4" />
                      Spot Reserved!
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setReservedEvent(ev.id);
                        setTimeout(() => setReservedEvent(null), 5000); // Reset for demonstration after 5 seconds
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white font-medium text-sm transition-all duration-300 hover:shadow-sm"
                    >
                      Reserve A Spot
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
