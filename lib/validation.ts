import { z } from "zod";

// Accepts international/local formats: optional leading +, 7-15 digits,
// with optional spaces, dashes or parentheses between digits.
const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(phoneRegex, "Please enter a valid phone number.")
    .refine((val) => val.replace(/\D/g, "").length >= 7, {
      message: "Please enter a valid phone number.",
    }),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(150, "Company name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(150, "Email is too long."),
  product: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().max(2000, "Message is too long.").optional().default(""),
  // Honeypot: must stay empty. Bots that auto-fill every field will trip this.
  company_website: z.string().max(0, "Spam detected.").optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
