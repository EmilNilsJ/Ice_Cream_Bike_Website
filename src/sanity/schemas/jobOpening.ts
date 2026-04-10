import { defineField, defineType } from "sanity";

export const jobOpeningSchema = defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Job title (English)",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "titleNl",
      title: "Job title (Dutch)",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "employmentType",
      title: "Employment type",
      type: "string",
      options: {
        list: [
          { title: "Seasonal", value: "seasonal" },
          { title: "Part-time", value: "part-time" },
          { title: "Full-time", value: "full-time" }
        ],
        layout: "radio"
      },
      initialValue: "seasonal",
      validation: (r) => r.required()
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Malmo, Sweden"
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (English)",
      description: "What the role involves, who you are looking for, etc.",
      type: "text",
      rows: 5,
      validation: (r) => r.required()
    }),
    defineField({
      name: "descriptionNl",
      title: "Description (Dutch)",
      type: "text",
      rows: 5,
      validation: (r) => r.required()
    }),
    defineField({
      name: "requirementsEn",
      title: "Requirements (English)",
      description: "One requirement per line.",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "requirementsNl",
      title: "Requirements (Dutch)",
      description: "One requirement per line.",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "applyEmail",
      title: "Apply email",
      description: "Where applicants should send their application.",
      type: "string"
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
    select: { title: "titleEn", subtitle: "employmentType", active: "active" },
    prepare({ title, subtitle, active }) {
      return {
        title: active === false ? `[Hidden] ${title}` : title,
        subtitle
      };
    }
  }
});
