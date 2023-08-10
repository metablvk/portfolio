import {PortableText} from '@portabletext/react';
import {Project} from '../../types/project.type';
import {Link} from 'react-router-dom';

type PGProps = {
  projects: Project[];
};

const ProjectGrid = ({projects}: PGProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {projects &&
        projects.map((project, id) => (
          <div key={id}>
            <h3 className="text-custom-purple text-xl pb-2">{project.name}</h3>
            <hr className="border-custom-grey mb-2" />
            <PortableText value={project.content} />
            <div className="flex space-x-2 mt-8 justify-end">
              <Link
                className="border border-custom-grey px-4 py-1"
                to={project.url}
                target="_blank"
              >
                🕸️ Site
              </Link>
              <Link
                className="border border-custom-grey px-4 py-1"
                to={project.github}
              >
                💾 Source
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectGrid;
