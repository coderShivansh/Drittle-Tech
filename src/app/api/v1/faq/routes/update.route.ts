import { Faq, IFaq } from "@/app/api/models/faq.model";
import db from "@/lib/db";
import { UpdateFaqDto } from "../../../validators/faq.validator";

export default async function updateTestimonial(
  id: string,
  body: UpdateFaqDto
): Promise<IFaq | null> {
  await db();
  const testimonial = await Faq.findByIdAndUpdate(id, body!, {
    new: true,
  });
  return testimonial;
}
