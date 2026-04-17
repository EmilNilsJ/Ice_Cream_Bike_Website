import { z } from "zod";

const URL_PATTERN = /https?:\/\/|www\./i;

function noLinks(val: string | undefined) {
  return !val || !URL_PATTERN.test(val);
}

export const quoteSchema = z.object({
  customerType: z.enum(["company", "family"]),
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(6),
  eventDate: z.string().min(4),
  location: z.string().min(2),
  postalCode: z.string().min(4),
  guests: z.coerce.number().min(10).max(1000),
  packageId: z.string().min(2),
  durationMinutes: z.coerce.number().min(30),
  addOnIds: z.array(z.string()).default([]),
  message: z.string().max(1200).optional().refine(noLinks, { message: "Links are not allowed in messages." }),
  _hp: z.string().max(0, "Submission rejected.").optional()
});

export const bookingSchema = quoteSchema.extend({
  scheduledAt: z.string().min(4),
  paymentIntentId: z.string().optional()
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10).max(1200).refine(noLinks, { message: "Links are not allowed in messages." }),
  _hp: z.string().max(0, "Submission rejected.").optional()
});
