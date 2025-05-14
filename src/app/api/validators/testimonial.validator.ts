import { z } from "zod";

export const createTestimonialSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  review: z.string().min(1, "Review is required"),
});

export const updateTestimonialSchema = z.object({
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().optional(),
  review: z.string().min(1, "Review is required").optional(),
  approved: z.boolean().optional(),
});

export type CreateTestimonialDto = z.infer<typeof createTestimonialSchema>;
export type UpdateTestimonialDto = z.infer<typeof updateTestimonialSchema>;
