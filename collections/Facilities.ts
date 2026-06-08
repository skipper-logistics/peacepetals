import { CollectionConfig } from "payload";

export const Facilities: CollectionConfig = {
  slug: "facilities",
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
      name: "subtitle",
      type: "text",
      required: true,
      label: "Short Subtitle (e.g. Comfort & Safety)",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
