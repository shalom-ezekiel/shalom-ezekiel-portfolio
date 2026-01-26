import React from 'react';
import { EDUCATION, SKILL_CATEGORIES } from '../constants';
import { Layout, Server, Database, Shield, GraduationCap, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Layout size={20} className="text-indigo-400" />;
      case 'server': return <Server size={20} className="text-emerald-400" />;
      case 'database': return <Database size={20} className="text-blue-400" />;
      case 'shield': return <Shield size={20} className="text-rose-400" />;
      default: return <Layout size={20} />;
    }
  };

  return (
    <section className="py-20 px-4 lg:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Education Compact */}
        <div className="lg:col-span-4 flex flex-col gap-6 reveal-left">
          <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-zinc-800 rounded-lg text-indigo-400">
               <GraduationCap size={20} />
             </div>
             <h2 className="text-2xl font-display font-bold text-white">Education</h2>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div key={edu.id} className="group bg-zinc-900/30 border border-white/5 p-5 rounded-xl hover:bg-zinc-900/60 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-1 leading-tight group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-zinc-500 text-xs font-medium mb-3 uppercase tracking-wider">{edu.institution}</div>
                <p className="text-zinc-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                  {edu.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills Grid Bento Style */}
        <div className="lg:col-span-8 reveal-right">
          <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-zinc-800 rounded-lg text-emerald-400">
               <Database size={20} />
             </div>
             <h2 className="text-2xl font-display font-bold text-white">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div 
                key={category.id}
                className="bg-zinc-900/20 border border-white/5 p-5 rounded-xl hover:bg-zinc-900/40 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-900 rounded border border-white/5">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-200">{category.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <div 
                      key={skill} 
                      className="px-2.5 py-1 bg-zinc-950 rounded border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;