import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi2';

const ProjectLinks: React.FC = () => {
  return (
    <section
      id="project-links-orange"
      className="py-16 bg-gradient-to-b from-orange-50 to-white text-center"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <HiLink className="text-3xl text-orange-500 mb-2" />
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Project <span className="text-orange-600">Links</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GitHub Repository */}
          <div className="bg-white border-l-4 border-orange-500 shadow-md rounded-lg p-8 flex flex-col items-center">
            <FaGithub className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub Repository</h3>
            <a
              href="https://github.com/SLIIT-Projects-Y4/Research-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-medium hover:underline flex items-center gap-2"
            >
              View Repository <span>↗</span>
            </a>
          </div>

          {/* Frontend Deployment */}
          <div className="bg-white border-l-4 border-orange-500 shadow-md rounded-lg p-8 flex flex-col items-center">
            <FaGlobe className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Deployment</h3>
            <a
              href="https://www.travelmachan.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-medium hover:underline flex items-center gap-2"
            >
              Visit Website <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLinks;
