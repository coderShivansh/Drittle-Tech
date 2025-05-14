import { Opening, IOpening } from "@/app/api/models/opening.model";
import db from "@/lib/db";
import { CreateOpeningDto } from "../../../validators/opening.validator";

export default async function createOpening(
  body: CreateOpeningDto
): Promise<IOpening> {
  await db();
  const opening: IOpening = await Opening.create(body);
  return opening;
}
