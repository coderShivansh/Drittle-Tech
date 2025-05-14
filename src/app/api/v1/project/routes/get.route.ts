import { Project, IProject } from '@/app/api/models/project.model';
import db from '@/lib/db';
import { Project as TProject } from '@/types';

export default async function getProject(id: string): Promise<TProject | null> {
  await db();
  const project = await Project.findById(id);

  return JSON.parse(JSON.stringify(project));
}
