import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Facilities from "../components/Facilities";
import Events from "../components/Events";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

import { getPayload } from "payload";
import config from "@payload-config";

export default async function Home() {
  let dbServices: any[] = [];
  let dbFacilities: any[] = [];
  let dbEvents: any[] = [];

  try {
    if (process.env.DATABASE_URI) {
      const payload = await getPayload({ config });

      const servicesRes = await payload.find({
        collection: "services",
        depth: 1,
        limit: 100,
      });
      dbServices = servicesRes.docs || [];

      const facilitiesRes = await payload.find({
        collection: "facilities",
        depth: 2,
        limit: 100,
      });
      dbFacilities = facilitiesRes.docs || [];

      const eventsRes = await payload.find({
        collection: "events",
        depth: 1,
        limit: 100,
      });
      dbEvents = eventsRes.docs || [];
    }
  } catch (error) {
    console.error("Payload CMS database query failed. Falling back to default static content:", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Welcome Hero */}
        <Hero />

        {/* Therapy Services Section */}
        <Services initialServices={dbServices} />

        {/* Sanctuary & Facilities Showcase */}
        <Facilities initialFacilities={dbFacilities} />

        {/* Community Events & Workshops */}
        <Events initialEvents={dbEvents} />

        {/* Interactive Booking Form */}
        <BookingForm services={dbServices} />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}


