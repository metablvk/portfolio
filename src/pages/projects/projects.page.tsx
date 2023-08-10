import Title from '../../components/title/title.component';
import {useEffect, useState} from 'react';
import {Project} from '../../types/project.type';
import {getProjects} from '../../sanity/sanity.utils';

import ProjectGrid from '../../components/project-grid/project-grid.component';

const Projects = () => {
  const [projects, setProjects] = useState<Project[] | []>([]);
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const projects = await getProjects();

    setProjects(projects);
  };
  return (
    <div className="relative mt-12">
      {/* Todo: Add in filtering */}
      <Title title="Projects" subTitle="Some of my latest projects" />
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Projects;
