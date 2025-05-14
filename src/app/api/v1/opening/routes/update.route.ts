import { Opening, IOpening } from "@/app/api/models/opening.model";
import db from "@/lib/db";
import { UpdateOpeningDto } from "../../../validators/opening.validator";

export default async function updateOpening(
  id: string,
  body: UpdateOpeningDto
): Promise<IOpening | null> {
  await db();
  const opening = await Opening.findByIdAndUpdate(id, body!, {
    new: true,
  });
  return opening;
}
