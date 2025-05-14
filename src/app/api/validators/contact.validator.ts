import { z } from "zod";

export const createContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

export const updateContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required").optional(),
  email: z.string().email("Invalid email format").optional(),
  message: z.string().min(1, "Message is required").optional(),
});

export type CreateContactDto = z.infer<typeof createContactSchema>;
export type UpdateContactDto = z.infer<typeof updateContactSchema>;
