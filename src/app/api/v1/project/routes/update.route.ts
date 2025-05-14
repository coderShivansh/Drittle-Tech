import { Project, IProject } from "@/app/api/models/project.model";
import db from "@/lib/db";
import { UpdateProjectDto } from "../../../validators/project.validator";

export default async function updateProject(
  id: string,
  body: UpdateProjectDto
): Promise<IProject | null> {
  await db();
  const project = await Project.findByIdAndUpdate(id, body!, {
    new: true,
  });
  return project;
}
