import { Contact, IContact } from "@/app/api/models/contact.model";
import db from "@/lib/db";
import { CreateContactDto } from "../../../validators/contact.validator";

export default async function createContact(
  body: CreateContactDto
): Promise<IContact> {
  await db();
  const contact: IContact = await Contact.create(body);
  return contact;
}
