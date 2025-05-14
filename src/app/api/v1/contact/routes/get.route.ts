import { Contact, IContact } from "@/app/api/models/contact.model";
import db from "@/lib/db";

export default async function getContact(id: string): Promise<IContact | null> {
  await db();
  const conatact = await Contact.findById(id);
  return conatact;
}
