import { Faq, IFaq } from "@/app/api/models/faq.model";
import db from "@/lib/db";

export default async function deleteFaq(id: string): Promise<IFaq | null> {
  await db();
  const testimonial = await Faq.findByIdAndDelete(id);
  return testimonial;
}
