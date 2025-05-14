import { Faq, IFaq } from "@/app/api/models/faq.model";
import db from "@/lib/db";
import { CreateFaqDto } from "../../../validators/faq.validator";

export default async function createFaq(body: CreateFaqDto): Promise<IFaq> {
  await db();
  const testimonial: IFaq = await Faq.create(body);
  return testimonial;
}
