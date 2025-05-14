import { z } from "zod";

export const createFaqSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

export const updateFaqSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
});

export type CreateFaqDto = z.infer<typeof createFaqSchema>;
export type UpdateFaqDto = z.infer<typeof updateFaqSchema>;
