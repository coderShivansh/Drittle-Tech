import { Project, IProject } from "@/app/api/models/project.model";
import db from "@/lib/db";

export default async function deleteProject(
  id: string
): Promise<IProject | null> {
  await db();
  const project = await Project.findByIdAndDelete(id);
  return project;
}
