import { z } from "zod";

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
  message: z.string().max(1200).optional()
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
  message: z.string().min(10).max(1200)
});
