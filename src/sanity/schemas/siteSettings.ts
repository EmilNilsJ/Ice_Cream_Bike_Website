import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand name",
      type: "string"
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string"
    }),
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "text",
      rows: 2
    }),
    defineField({
      name: "heroDescription",
      title: "Hero description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "founderQuote",
      title: "Founder quote",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "footerDescription",
      title: "Footer description",
      type: "text",
      rows: 2
    }),
    defineField({
      name: "serviceArea",
      title: "Service area text",
      type: "string"
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string"
    }),
    defineField({
      name: "contactPhone",
      title: "Contact phone",
      type: "string"
    })
  ],
  preview: {
    select: { title: "brandName" }
  }
});
