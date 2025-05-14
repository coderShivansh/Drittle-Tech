import { Opening, IOpening } from "@/app/api/models/opening.model";
import db from "@/lib/db";

export default async function deleteOpening(
  id: string
): Promise<IOpening | null> {
  await db();
  const opening = await Opening.findByIdAndDelete(id);
  return opening;
}
