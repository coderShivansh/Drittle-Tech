import { Contact, IContact } from "@/app/api/models/contact.model";
import db from "@/lib/db";
import { UpdateContactDto } from "../../../validators/contact.validator";

export default async function updateContact(
  id: string,
  body: UpdateContactDto
): Promise<IContact | null> {
  await db();
  const contact = await Contact.findByIdAndUpdate(id, body!, {
    new: true,
  });
  return contact;
}
