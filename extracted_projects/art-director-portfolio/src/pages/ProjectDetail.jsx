import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { works } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = works.find(w => w.id === id) || works[0]; // Fallback to first if not found

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-12 pb-32 px-6 md:px-12">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#737373] hover:text-[#1A1A1A] transition-colors mb-12">
        <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 bg-white border border-black/5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">
            {project.title}
          </h1>
          <p className="text-xl text-[#737373] font-light max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-video md:aspect-[21/9] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 pt-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium tracking-tight mb-6">Project Overview</h3>
            <p className="text-[#737373] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[#737373] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-black/5 h-fit">
            <h4 className="text-sm font-medium tracking-widest uppercase text-[#737373] mb-6">Details</h4>
            <div className="space-y-4">
              <div>
                <span className="block text-xs text-[#737373] mb-1">Client</span>
                <span className="font-medium">Studio {project.title.split(' ')[0]}</span>
              </div>
              <div>
                <span className="block text-xs text-[#737373] mb-1">Year</span>
                <span className="font-medium">2023</span>
              </div>
              <div>
                <span className="block text-xs text-[#737373] mb-1">Role</span>
                <span className="font-medium">Art Direction, UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}