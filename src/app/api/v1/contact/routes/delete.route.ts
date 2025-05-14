import { Contact, IContact } from "@/app/api/models/contact.model";
import db from "@/lib/db";

export default async function deleteContact(
  id: string
): Promise<IContact | null> {
  await db();
  const contact = await Contact.findByIdAndDelete(id);
  return contact;
}
