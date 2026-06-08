"use client";

import React, { useState } from "react";
import { Clock, CheckCircle2, User, Users, Compass, Smile, Eye } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "individual" | "relationship" | "group" | "all";
  description: string;
  duration: string;
  mode: string;
  price: string;
  details: string[];
  icon: React.ReactNode;
}

interface ServicesProps {
  initialServices?: any[];
}

export default function Services({ initialServices }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"all" | "individual" | "relationship" | "group">("all");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const defaultServices: ServiceItem[] = [
    {
      id: "ind-1",
      title: "Individual Counselling & Therapy",
      category: "individual",
      description: "A private, compassionate one-on-one session to work through personal challenges, anxiety, depression, or transitions.",
      duration: "50 mins",
      mode: "In-Person & Online",
      price: "$120",
      details: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness-Based Stress Reduction",
        "Trauma-informed care",
        "Emotional regulation strategies",
      ],
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "ind-2",
      title: "Self-Discovery & Empowerment",
      category: "individual",
      description: "Focus on building self-esteem, setting healthy boundaries, understanding identity, and realizing personal goals.",
      duration: "50 mins",
      mode: "In-Person & Online",
      price: "$120",
      details: [
        "Narrative therapy principles",
        "Strengths-focused coaching",
        "Boundary work strategies",
        "Self-compassion practices",
      ],
      icon: <Smile className="w-5 h-5" />,
    },
    {
      id: "rel-1",
      title: "Couples & Relationship Counselling",
      category: "relationship",
      description: "Designed for couples wishing to resolve conflict, rebuild trust, deepen intimacy, or navigate difficult milestones.",
      duration: "75 mins",
      mode: "In-Person Only",
      price: "$160",
      details: [
        "Gottman Method practices",
        "Emotionally Focused Therapy (EFT)",
        "Communication workshops",
        "Conflict resolution patterns",
      ],
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "grp-1",
      title: "Mindfulness & Meditation Workshops",
      category: "group",
      description: "Group sessions focused on somatic grounding, breathwork, and shared healing circles in our peaceful garden.",
      duration: "90 mins",
      mode: "In-Person Only",
      price: "$45",
      details: [
        "Somatic breathing guidance",
        "Sound bowl meditation",
        "Reflective group sharing",
        "Stress response regulation",
      ],
      icon: <Compass className="w-5 h-5" />,
    },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-5 h-5" />;
      case "compass":
        return <Compass className="w-5 h-5" />;
      case "smile":
        return <Smile className="w-5 h-5" />;
      case "user":
      default:
        return <User className="w-5 h-5" />;
    }
  };

  const services: ServiceItem[] =
    initialServices && initialServices.length > 0
      ? initialServices.map((s: any) => ({
          id: s.id,
          title: s.title,
          category: s.category,
          description: s.description,
          duration: s.duration,
          mode: s.category === "group" ? "In-Person Only" : "In-Person & Online",
          price: s.price,
          details: s.details ? s.details.map((d: any) => d.point) : [],
          icon: getIconComponent(s.icon),
        }))
      : defaultServices;

  const filteredServices =
    activeTab === "all" ? services : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-primary font-semibold mb-4">
            Compassionate Therapeutic Services
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 font-sans leading-relaxed">
            We provide a variety of evidence-based therapy sessions tailored to support your mental, emotional, and spiritual healing process.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-brand-lavender/50 border border-brand-primary/5">
            {(["all", "individual", "relationship", "group"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedService(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "bg-brand-primary text-white shadow-sm"
                    : "text-foreground/70 hover:text-brand-primary"
                }`}
              >
                {tab === "all" ? "All Sessions" : `${tab}`}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredServices.map((service) => {
            const isExpanded = selectedService === service.id;
            return (
              <div
                key={service.id}
                className="bg-brand-cream/40 border border-brand-primary/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-brand-secondary/20 relative overflow-hidden group"
              >
                {/* Accent Corner Decor */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-secondary/5 to-transparent rounded-tr-3xl transition-all duration-300 group-hover:scale-110" />

                <div>
                  {/* Service Header Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/8 text-brand-primary flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold uppercase tracking-wider">
                      {service.price}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-brand-primary font-semibold mb-3">
                    {service.title}
                  </h3>

                  {/* Service Short Description */}
                  <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/60 mb-6 pb-6 border-b border-brand-primary/5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-secondary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                    <span>{service.mode}</span>
                  </div>

                  {/* Interactive Details Toggle */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isExpanded ? "max-h-60 opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <h4 className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
                      What to expect in session:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between gap-4 mt-4 pt-2">
                  <button
                    onClick={() => setSelectedService(isExpanded ? null : service.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors focus:outline-none"
                  >
                    <Eye className="w-4 h-4" />
                    {isExpanded ? "Hide Details" : "View Focus Areas"}
                  </button>
                  <a
                    href="#book"
                    className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    Book This
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
