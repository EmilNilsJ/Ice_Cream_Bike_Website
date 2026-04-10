import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "role",
      title: "Role / context",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required()
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false
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
    select: { title: "author", subtitle: "role" }
  }
});
