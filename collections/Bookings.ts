import { CollectionConfig } from "payload";

export const Bookings: CollectionConfig = {
  slug: "bookings",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => true, // Publicly writable from the frontend
    read: ({ req: { user } }) => !!user, // Read-only for authenticated admins
    update: ({ req: { user } }) => !!user, // Admin-only
    delete: ({ req: { user } }) => !!user, // Admin-only
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "service",
      type: "relationship",
      relationTo: "services",
      required: true,
    },
    {
      name: "therapist",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "In-Person", value: "in-person" },
        { label: "Online Video", value: "online-video" },
      ],
    },
    {
      name: "date",
      type: "text",
      required: true,
    },
    {
      name: "timeSlot",
      type: "text",
      required: true,
    },
    {
      name: "note",
      type: "textarea",
    },
  ],
};
