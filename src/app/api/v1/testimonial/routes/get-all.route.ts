import { Testimonial, ITestimonial } from "@/app/api/models/testimonial.model";
import db from "@/lib/db";

export default async function getAllTestimonial(): Promise<ITestimonial[]> {
  await db();
  const testimonial: ITestimonial[] = await Testimonial.find({
    approved: true,
  });
  return testimonial;
}
