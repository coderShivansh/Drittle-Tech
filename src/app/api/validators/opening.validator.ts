import { z } from "zod";

export const createOpeningSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  level: z.string().min(1, "Level is required"),
  salary: z.number().optional(),
  isExpire: z.boolean().optional(),
  jobId: z.string().min(1, "Job ID is required"),
});

export const updateOpeningSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().optional(),
  level: z.string().min(1, "Level is required").optional(),
  salary: z.number().optional(),
  isExpire: z.boolean().optional(),
  jobId: z.string().min(1, "Job ID is required").optional(),
});

export type CreateOpeningDto = z.infer<typeof createOpeningSchema>;
export type UpdateOpeningDto = z.infer<typeof updateOpeningSchema>;
