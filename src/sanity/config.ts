import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "ice-cream-bike",
  title: "The Ice Cream Bike",
  projectId,
  dataset,
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
            S.documentTypeListItem("testimonial").title("Testimonials")
          ])
    })
  ],
  schema: { types: schemas }
});
