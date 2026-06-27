import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";

import { migrations } from "./migrations";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Services } from "./collections/Services";
import { Facilities } from "./collections/Facilities";
import { Events } from "./collections/Events";
import { Bookings } from "./collections/Bookings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Services, Facilities, Events, Bookings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "fallback-secret-key-peacepetal-38291",
  db: postgresAdapter({
    prodMigrations: migrations,
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || "",
    },
  }),
  async onInit(payload) {
    // Seed default Services if empty
    const existingServices = await payload.find({ collection: "services", limit: 1 });
    if (existingServices.totalDocs === 0) {
      payload.logger.info("Seeding default services...");
      
      await payload.create({
        collection: "services",
        data: {
          title: "Individual Counselling & Therapy",
          category: "individual",
          description: "A private, compassionate one-on-one session to work through personal challenges, anxiety, depression, or transitions.",
          duration: "50 mins",
          price: "$120",
          icon: "user",
          details: [
            { point: "Cognitive Behavioral Therapy (CBT)" },
            { point: "Mindfulness-Based Stress Reduction" },
            { point: "Trauma-informed care" },
            { point: "Emotional regulation strategies" },
          ],
        },
      });

      await payload.create({
        collection: "services",
        data: {
          title: "Self-Discovery & Empowerment",
          category: "individual",
          description: "Focus on building self-esteem, setting healthy boundaries, understanding identity, and realizing personal goals.",
          duration: "50 mins",
          price: "$120",
          icon: "smile",
          details: [
            { point: "Narrative therapy principles" },
            { point: "Strengths-focused coaching" },
            { point: "Boundary work strategies" },
            { point: "Self-compassion practices" },
          ],
        },
      });

      await payload.create({
        collection: "services",
        data: {
          title: "Couples & Relationship Counselling",
          category: "relationship",
          description: "Designed for couples wishing to resolve conflict, rebuild trust, deepen intimacy, or navigate difficult milestones.",
          duration: "75 mins",
          price: "$160",
          icon: "users",
          details: [
            { point: "Gottman Method practices" },
            { point: "Emotionally Focused Therapy (EFT)" },
            { point: "Communication workshops" },
            { point: "Conflict resolution patterns" },
          ],
        },
      });

      await payload.create({
        collection: "services",
        data: {
          title: "Mindfulness & Meditation Workshops",
          category: "group",
          description: "Group sessions focused on somatic grounding, breathwork, and shared healing circles in our peaceful garden.",
          duration: "90 mins",
          price: "$45",
          icon: "compass",
          details: [
            { point: "Somatic breathing guidance" },
            { point: "Sound bowl meditation" },
            { point: "Reflective group sharing" },
            { point: "Stress response regulation" },
          ],
        },
      });
    }

    // Seed default Events if empty
    const existingEvents = await payload.find({ collection: "events", limit: 1 });
    if (existingEvents.totalDocs === 0) {
      payload.logger.info("Seeding default events...");
      
      await payload.create({
        collection: "events",
        data: {
          title: "Mindfulness & Healing Circle",
          category: "Group Meditation",
          date: "Saturday, June 20, 2026",
          time: "10:00 AM - 11:30 AM",
          location: "Mindfulness Sanctuary & Garden",
          host: "Dr. Evelyn Rose, PhD",
          capacity: "12 spots left",
          description: "A gentle group gathering focused on heart-opening breathwork, calming acoustic sound healing, and reflective sharing to establish a deeper sense of grounding.",
        },
      });

      await payload.create({
        collection: "events",
        data: {
          title: "Anxiety & Stress Reduction Workshop",
          category: "Educational",
          date: "Wednesday, June 24, 2026",
          time: "6:30 PM - 8:00 PM",
          location: "Conference Studio & Online Hybrid",
          host: "Mark Peterson, LMFT",
          capacity: "6 spots left",
          description: "Learn practical, somatic coping tools and CBT-based strategies to navigate daily stressors, regulate your nervous system, and set healthy boundaries in life.",
        },
      });

      await payload.create({
        collection: "events",
        data: {
          title: "Introduction to Art & Expression Therapy",
          category: "Art Therapy",
          date: "Sunday, June 28, 2026",
          time: "2:00 PM - 4:00 PM",
          location: "Therapeutic Art Space",
          host: "Sarah Chen, ATR-BC",
          capacity: "4 spots left",
          description: "No art experience required. Discover the calming power of creative self-expression. We supply all materials for painting, sculpting, and reflection exercises.",
        },
      });
    }

    // Seed default Facilities if empty
    const existingFacilities = await payload.find({ collection: "facilities", limit: 1 });
    if (existingFacilities.totalDocs === 0) {
      payload.logger.info("Seeding default facilities and media...");
      
      const mediaList = [
        { filename: "peacepetalssampleimg1.jpeg", alt: "The Serenity Consultation Room" },
        { filename: "peacepetalssampleimg2.jpeg", alt: "The Mindfulness Sanctuary" },
        { filename: "peacepetalssampleimg3.jpeg", alt: "Welcoming Reception Lobby" },
        { filename: "peacepetalssampleimg4.jpeg", alt: "The Healing Garden Terrace" }
      ];

      const createdMedia = [];
      
      for (const item of mediaList) {
        try {
          const mediaDoc = await payload.create({
            collection: "media",
            data: {
              alt: item.alt,
            },
            filePath: path.resolve(dirname, "public", item.filename),
          });
          createdMedia.push(mediaDoc);
        } catch (e) {
          payload.logger.error(e, `Failed to upload media seed for ${item.filename}`);
        }
      }

      if (createdMedia.length >= 4) {
        await payload.create({
          collection: "facilities",
          data: {
            title: "The Serenity Consultation Room",
            subtitle: "Comfort & Safety",
            description: "A softly lit, warm environment designed to make you feel safe and comfortable during your one-on-one sessions. Featuring comfortable seating, noise dampening, and relaxing natural materials.",
            image: createdMedia[0].id,
          },
        });

        await payload.create({
          collection: "facilities",
          data: {
            title: "The Mindfulness Sanctuary",
            subtitle: "Meditation & Yoga",
            description: "A spacious, natural wooden hall bathed in sunlight, used for group workshops, sound baths, yoga, and breathwork sessions. Designed with calming plants and floor cushions.",
            image: createdMedia[1].id,
          },
        });

        await payload.create({
          collection: "facilities",
          data: {
            title: "Welcoming Reception Lobby",
            subtitle: "A Peaceful Welcome",
            description: "Step into immediate tranquility. Our welcoming lobby features a soft tea bar, warm dimmable lights, and therapeutic literature to help you settle in before your session starts.",
            image: createdMedia[2].id,
          },
        });

        await payload.create({
          collection: "facilities",
          data: {
            title: "The Healing Garden Terrace",
            subtitle: "Outdoor Somatic Spaces",
            description: "A lush, outdoor botanical terrace designated for therapeutic walks, nature-based counseling, or quiet reflection after sessions. Fresh air and soft water fountains assist grounding.",
            image: createdMedia[3].id,
          },
        });
      }
    }
  },
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
