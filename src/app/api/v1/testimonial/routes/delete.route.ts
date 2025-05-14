import { Testimonial, ITestimonial } from "@/app/api/models/testimonial.model";
import db from "@/lib/db";

export default async function deleteTestimonial(
  id: string
): Promise<ITestimonial | null> {
  await db();
  const testimonial = await Testimonial.findByIdAndDelete(id);
  return testimonial;
}
