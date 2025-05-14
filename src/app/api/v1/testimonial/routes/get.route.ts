import { Testimonial, ITestimonial } from "@/app/api/models/testimonial.model";
import db from "@/lib/db";

export default async function getTestimonial(
  id: string
): Promise<ITestimonial | null> {
  await db();
  const testimonial = await Testimonial.findById(id);
  return testimonial;
}
