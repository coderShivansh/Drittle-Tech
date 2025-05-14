import { Opening, IOpening } from "@/app/api/models/opening.model";
import db from "@/lib/db";

export default async function getOpening(id: string): Promise<IOpening | null> {
  await db();
  const opening = await Opening.findById(id);
  return opening;
}
