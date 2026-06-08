"use client";

import React, { useState } from "react";
import { Calendar, User, Video, ShieldCheck, Clock, Check, ArrowRight } from "lucide-react";

interface Therapist {
  name: string;
  role: string;
  img: string;
}

interface BookingFormProps {
  services?: any[];
}

export default function BookingForm({ services = [] }: BookingFormProps) {
  const [formData, setFormData] = useState({
    service: services && services.length > 0 ? services[0].id : "individual-therapy",
    therapist: "Dr. Evelyn Rose, PhD",
    type: "in-person",
    date: "",
    timeSlot: "10:30 AM",
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  React.useEffect(() => {
    if (services && services.length > 0) {
      setFormData((prev) => ({ ...prev, service: services[0].id }));
    }
  }, [services]);

  const [step, setStep] = useState(1); // 1: Form details, 2: Confirmation success
  const [loading, setLoading] = useState(false);

  const therapists: Therapist[] = [
    { name: "Dr. Evelyn Rose, PhD", role: "Clinical Psychologist (Individual & Mindfulness)", img: "ER" },
    { name: "Mark Peterson, LMFT", role: "Licensed Family Therapist (Relationships & Couples)", img: "MP" },
    { name: "Sarah Chen, ATR-BC", role: "Board Certified Art Therapist (Creative Expression)", img: "SC" },
  ];

  const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "3:00 PM", "5:30 PM"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.service) {
      alert("Please fill out your Name, Email, preferred Date and Service.");
      return;
    }
    setLoading(true);

    const isDatabaseId =
      formData.service &&
      !formData.service.includes("-therapy") &&
      !formData.service.includes("-counselling") &&
      !formData.service.includes("-workshop");

    if (!isDatabaseId) {
      console.log("Mock booking simulated (no active DB record):", formData);
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 1000);
      return;
    }

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
          service: formData.service,
          therapist: formData.therapist,
          type: formData.type,
          date: formData.date,
          timeSlot: formData.timeSlot,
          note: formData.note || "",
        }),
      });

      if (res.ok) {
        setStep(2);
      } else {
        const errData = await res.json();
        console.error("Booking failed:", errData);
        alert("Unable to submit booking. Check database configuration.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("Network error: Unable to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-24 bg-brand-lavender/30 relative">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-brand-secondary/5 filter blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-rose/15 filter blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {step === 1 ? (
          <div className="bg-white border border-brand-primary/5 rounded-3xl p-6 sm:p-10 shadow-lg">
            {/* Form Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest block mb-2">
                Begin Your Journey
              </span>
              <h2 className="text-3xl font-serif text-brand-primary font-bold">
                Book a Therapeutic Session
              </h2>
              <p className="text-sm text-foreground/75 mt-2 font-light">
                Fill out the details below to request a consultation. Our intake team will confirm your slot within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Session Specifics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-semibold text-brand-primary">
                    Select Service / Care Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                  >
                    {services && services.length > 0 ? (
                      services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.price})
                        </option>
                      ))
                    ) : (
                      <>
                        <option value="individual-therapy">Individual Counselling & Therapy ($120)</option>
                        <option value="self-discovery">Self-Discovery & Empowerment ($120)</option>
                        <option value="couples-counselling">Couples & Relationship Counselling ($160)</option>
                        <option value="meditation-workshop">Mindfulness & Meditation Workshop ($45)</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Therapist Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="therapist" className="text-sm font-semibold text-brand-primary">
                    Preferred Therapist
                  </label>
                  <select
                    id="therapist"
                    name="therapist"
                    value={formData.therapist}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                  >
                    {therapists.map((t) => (
                      <option key={t.name} value={t.name}>
                        {t.name} - {t.role.split(" (")[0]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mode Option */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-sm font-semibold text-brand-primary">
                    Session Format
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                  >
                    <option value="in-person">In-Person (at our Center)</option>
                    <option value="online-video">Online Video / Telehealth</option>
                  </select>
                </div>

                {/* Date Picker */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm font-semibold text-brand-primary">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                  />
                </div>
              </div>

              {/* Time Slot Selector */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-brand-primary">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.timeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                        className={`py-3 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                          isSelected
                            ? "bg-brand-primary border-brand-primary text-white shadow-sm"
                            : "bg-white border-brand-primary/10 hover:border-brand-primary/45 text-foreground/80"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Client Info */}
              <div className="border-t border-brand-primary/5 pt-8">
                <h3 className="text-base font-serif text-brand-primary font-semibold mb-6 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-secondary" />
                  Your Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground/75">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground/75">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground/75">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. (555) 019-2834"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="note" className="text-xs font-semibold text-foreground/75">
                    Is there anything you would like your therapist to know in advance? (Optional)
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    placeholder="Brief description of concerns or therapist preferences..."
                    value={formData.note}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 bg-brand-cream/15 text-sm focus:outline-none focus:border-brand-primary/30"
                  />
                </div>
              </div>

              {/* Form Footer Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-primary/5 pt-8">
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <ShieldCheck className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Your clinical records and data remain strictly confidential.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-sm transition-all duration-300 shadow-sm disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Submit Booking Request"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation / Success Screen */
          <div className="bg-white border border-brand-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl text-center animate-scale-up relative overflow-hidden">
            {/* Top Confetti Decor */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-rose" />

            <div className="w-16 h-16 rounded-full bg-brand-secondary/15 text-brand-secondary flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" />
            </div>

            <h2 className="text-3xl font-serif text-brand-primary font-bold mb-3">
              Booking Request Received!
            </h2>
            <p className="text-base text-foreground/80 max-w-lg mx-auto mb-8 font-light">
              Hi, <span className="font-semibold text-brand-primary">{formData.name}</span>. Thank you for taking this step. We have sent a confirmation email to <span className="font-medium text-brand-secondary">{formData.email}</span>.
            </p>

            {/* Recap Box */}
            {(() => {
              const selectedServiceObj = services.find((s) => s.id === formData.service);
              const serviceName = selectedServiceObj
                ? selectedServiceObj.title
                : formData.service.replace("-", " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
              return (
                <div className="bg-brand-cream border border-brand-primary/5 rounded-2xl p-6 text-left max-w-md mx-auto mb-8 text-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-primary">Scheduled Date & Time</p>
                      <p className="text-foreground/80">{formData.date} at {formData.timeSlot}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-primary">Preferred Practitioner</p>
                      <p className="text-foreground/80">{formData.therapist}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-primary">Service Chosen</p>
                      <p className="text-foreground/80">{serviceName}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    {formData.type === "in-person" ? (
                      <Clock className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" />
                    ) : (
                      <Video className="w-4.5 h-4.5 text-brand-secondary shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold text-brand-primary">Session Format</p>
                      <p className="text-foreground/80 capitalize">
                        {formData.type.replace("-", " ")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Advice Tips */}
            <div className="max-w-lg mx-auto mb-10 p-5 rounded-2xl bg-brand-secondary/5 border border-brand-secondary/10 text-left text-xs text-brand-secondary leading-relaxed">
              <p className="font-bold mb-1 text-brand-primary">Preparing for your session:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>For Online: Find a quiet, private space with a stable internet connection.</li>
                <li>For In-Person: Please arrive 10-15 minutes early to settle in with herbal tea.</li>
                <li>Reflect briefly on what you hope to address or achieve in your sessions.</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setFormData({
                  service: "individual-therapy",
                  therapist: "Dr. Evelyn Rose, PhD",
                  type: "in-person",
                  date: "",
                  timeSlot: "10:30 AM",
                  name: "",
                  email: "",
                  phone: "",
                  note: "",
                });
                setStep(1);
              }}
              className="px-6 py-3 rounded-full border border-brand-primary/20 hover:border-brand-primary text-brand-primary text-sm font-semibold transition-colors"
            >
              Book Another Session
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
