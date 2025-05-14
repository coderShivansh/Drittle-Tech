import { Testimonial, ITestimonial } from "@/app/api/models/testimonial.model";
import db from "@/lib/db";
import { CreateTestimonialDto } from "../../../validators/testimonial.validator";

export default async function createTestimonial(
  body: CreateTestimonialDto
): Promise<ITestimonial> {
  await db();
  const testimonial: ITestimonial = await Testimonial.create(body);
  return testimonial;
}
