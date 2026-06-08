import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
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
      type: "select",
      required: true,
      options: [
        { label: "Individual Counselling", value: "individual" },
        { label: "Relationships & Couples", value: "relationship" },
        { label: "Group Sessions & Workshops", value: "group" },
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "duration",
      type: "text",
      required: true,
      defaultValue: "50 mins",
    },
    {
      name: "price",
      type: "text",
      required: true,
      defaultValue: "$120",
    },
    {
      name: "icon",
      type: "select",
      required: true,
      options: [
        { label: "User (Individual)", value: "user" },
        { label: "Users (Couples)", value: "users" },
        { label: "Compass (Mindfulness)", value: "compass" },
        { label: "Smile (Empowerment)", value: "smile" },
      ],
      defaultValue: "user",
    },
    {
      name: "details",
      type: "array",
      label: "Focus Areas & Highlights",
      fields: [
        {
          name: "point",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
