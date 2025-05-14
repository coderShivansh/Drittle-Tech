import { Project, IProject } from '@/app/api/models/project.model';
import { PROJECTS_LIMIT } from '@/lib/constant';
import db from '@/lib/db';
import { Project as TProject } from '@/types';

export default async function getAllProject(
  showAll: boolean = true
): Promise<TProject[]> {
  await db();
  let projects: IProject[] = [];

  if (showAll) {
    projects = await Project.find();
  } else {
    projects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(PROJECTS_LIMIT);
  }

  return JSON.parse(JSON.stringify(projects));
}
