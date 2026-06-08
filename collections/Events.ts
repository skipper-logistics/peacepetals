import { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "text",
      required: true,
      label: "Event Category (e.g. Group Meditation)",
    },
    {
      name: "date",
      type: "text",
      required: true,
      label: "Event Date String (e.g. Saturday, June 20, 2026)",
    },
    {
      name: "time",
      type: "text",
      required: true,
      label: "Event Time Range (e.g. 10:00 AM - 11:30 AM)",
    },
    {
      name: "location",
      type: "text",
      required: true,
      defaultValue: "Mindfulness Sanctuary & Garden",
    },
    {
      name: "host",
      type: "text",
      required: true,
      label: "Host / Facilitator",
    },
    {
      name: "capacity",
      type: "text",
      required: true,
      label: "Seat Availability (e.g. 12 spots left)",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
  ],
};
