import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./src/sanity/schemas";

export default defineConfig({
  name: "ice-cream-bike",
  title: "The Ice Cream Bike",
  projectId: "ekqlp5bq",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("flavor").title("Ice Cream Flavors"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("jobOpening").title("Job Openings")
          ])
    })
  ],
  schema: { types: schemas }
});
