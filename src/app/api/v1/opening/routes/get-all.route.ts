import { Opening, IOpening } from "@/app/api/models/opening.model";
import db from "@/lib/db";

export default async function getOpening(): Promise<IOpening[]> {
  await db();
  const opening: IOpening[] = await Opening.find();
  return opening;
}
