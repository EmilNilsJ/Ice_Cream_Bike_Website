import { defineField, defineType } from "sanity";

export const flavorSchema = defineType({
  name: "flavor",
  title: "Ice Cream Flavor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (English)",
      type: "text",
      rows: 3,
      validation: (r) => r.required()
    }),
    defineField({
      name: "descriptionNl",
      title: "Description (Dutch)",
      type: "text",
      rows: 3,
      validation: (r) => r.required()
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "allergens",
      title: "Allergens",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Milk", value: "Milk" },
          { title: "Gluten", value: "Gluten" },
          { title: "Eggs", value: "Eggs" },
          { title: "Nuts", value: "Nuts" },
          { title: "Soy", value: "Soy" }
        ]
      }
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Companies", value: "company" },
          { title: "Families", value: "family" }
        ]
      },
      validation: (r) => r.required().min(1)
    }),
    defineField({
      name: "seasonal",
      title: "Seasonal (winter edition)",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "active",
      title: "Active (show on website)",
      type: "boolean",
      initialValue: true
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 99
    })
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }]
    }
  ],
  preview: {
    select: { title: "name", media: "image", seasonal: "seasonal" },
    prepare({ title, media, seasonal }) {
      return { title: seasonal ? `${title} (seasonal)` : title, media };
    }
  }
});
