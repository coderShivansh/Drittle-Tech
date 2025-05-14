import { Testimonial, ITestimonial } from "@/app/api/models/testimonial.model";
import db from "@/lib/db";
import { UpdateTestimonialDto } from "../../../validators/testimonial.validator";

export default async function updateTestimonial(
  id: string,
  body: UpdateTestimonialDto
): Promise<ITestimonial | null> {
  await db();
  const testimonial = await Testimonial.findByIdAndUpdate(id, body!, {
    new: true,
  });
  return testimonial;
}
