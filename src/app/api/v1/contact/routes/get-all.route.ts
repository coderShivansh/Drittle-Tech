import { Contact, IContact } from "@/app/api/models/contact.model";
import db from "@/lib/db";

export default async function getAllContact(): Promise<IContact[]> {
  await db();
  const conatact: IContact[] = await Contact.find();
  return conatact;
}
