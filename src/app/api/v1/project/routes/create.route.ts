import { Project, IProject } from "@/app/api/models/project.model";
import db from "@/lib/db";
import { CreateProjectDto } from "../../../validators/project.validator";

export default async function createProject(
  body: CreateProjectDto
): Promise<IProject> {
  await db();
  const project: IProject = await Project.create(body);
  return project;
}
