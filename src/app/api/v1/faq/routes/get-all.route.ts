import { Faq, IFaq } from "@/app/api/models/faq.model";
import db from "@/lib/db";

export default async function getAllTestimonial(): Promise<IFaq[]> {
  await db();
  const testimonial: IFaq[] = await Faq.find();
  return testimonial;
}
