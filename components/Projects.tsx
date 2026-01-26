import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-4 lg:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-left">
        <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">
          SELECTED <span className="text-zinc-800">WORKS</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm max-w-xs text-right">
          A collection of experiments, products, and tools built for the future web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[350px]">
        {PROJECTS.map((project, idx) => {
          // Determine grid span based on index for Bento effect
          const isLarge = idx === 0 || idx === 3;
          const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1';
          
          return (
            <div 
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-zinc-900/20 border border-white/5 hover:border-white/20 transition-all duration-500 ${colSpan} reveal-scale`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex justify-between items-start">
                   <div className="p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 group-hover:scale-110">
                      <Github size={20} className="text-white" />
                   </div>
                   <a 
                    href={project.link || "#"}
                    className="p-3 bg-white text-black rounded-full hover:scale-125 transition-transform duration-300"
                   >
                     <ArrowUpRight size={20} />
                   </a>
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-display font-bold text-white mb-2 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 z-10 transition-opacity duration-500"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out z-0" 
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;