import { Faq, IFaq } from "@/app/api/models/faq.model";
import db from "@/lib/db";

export default async function getTestimonial(id: string): Promise<IFaq | null> {
  await db();
  const testimonial = await Faq.findById(id);
  return testimonial;
}
