import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  liveUrl: z.string().url("Invalid URL format").min(1, "Live URL is required"),
  imageUrl: z.string().url("Invalid URL format"),
  points: z.array(z.string()).optional(),
});

export const updateProjectSchema = z.object({
  name: z.string().min(1, "Project name is required").optional(),
  description: z.string().optional(),
  liveUrl: z.string().url("Invalid URL format").optional(),
  imageUrl: z.string().url("Invalid URL format").optional(),
  points: z.array(z.string()).optional(),
});

export type CreateProjectDto = z.infer<typeof createProjectSchema>;
export type UpdateProjectDto = z.infer<typeof updateProjectSchema>;
