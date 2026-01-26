import React from 'react';
import { PROFILE_TITLE, PROFILE_BIO, SOCIAL_LINKS } from '../constants';
import { ArrowDownRight, Globe, Zap, Eye, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col pt-32 relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Top Meta Data */}
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-2">
              <Globe size={14} className="text-indigo-500" />
              LOCATION: Remote / Open to Relocate
            </span>
            <span className="flex items-center gap-2">
              <Zap size={14} className="text-yellow-500" />
              STATUS: AVAILABLE_FOR_WORK
            </span>
          </div>
          <div className="text-right">
             <p className="text-xs font-mono text-zinc-500">EST. 2024</p>
          </div>
        </div>

        {/* Main Title */}
        <div className="relative">
          <h1 className="text-[9vw] lg:text-[10vw] leading-[0.9] font-display font-bold text-white tracking-tighter uppercase">
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Hi, I'm</span>
            <span className="block text-zinc-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Shalom Ezekiel</span>
          </h1>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          <div className="lg:col-span-4 flex justify-center lg:block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <div className="w-64 md:w-80 lg:w-full aspect-square rounded-full overflow-hidden border-2 border-zinc-800 relative group animate-float">
                <img 
                  src="/images/1000590099.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter " 
                />
                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-zinc-200 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              {PROFILE_TITLE}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {PROFILE_BIO}
            </p>
            
            {/* Buttons & Socials */}
            <div className="flex flex-col gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-white text-black font-bold font-display tracking-wide overflow-hidden rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 bg-indigo-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative group-hover:text-white transition-colors flex items-center gap-2">
                    VIEW WORK <ArrowDownRight size={20} />
                  </span>
                </button>

                <button
                  onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-lg font-display tracking-wide transition-all hover:scale-105 flex items-center gap-2"
                >
                  VIEW RESUME <Eye size={20} />
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href={SOCIAL_LINKS.GITHUB} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 group hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={SOCIAL_LINKS.LINKEDIN} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 group hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={SOCIAL_LINKS.TWITTER} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:bg-black hover:text-white hover:border-zinc-600 transition-all duration-300 group hover:-translate-y-1"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={SOCIAL_LINKS.EMAIL}
                  className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 group hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <div className="h-[1px] bg-zinc-800 flex-1 ml-4"></div>
                <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Connect</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full border-t border-b border-white/5 bg-black/50 backdrop-blur-sm py-4 mt-20 overflow-hidden flex reveal-on-scroll">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-zinc-500 font-display font-bold text-4xl uppercase opacity-30 select-none">
          <span>Node.js</span><span>Express.js</span><span>Python</span><span>Flask</span><span>FastApi</span>
          <span>TypeScript</span><span>Next.js</span><span>Tailwind</span><span>WebGL</span><span>Node.js</span>
          <span>PostgreSQL</span><span>MongoDB</span><span>REST API</span><span>JWT</span><span>Docker</span>
          <span>Git</span><span>AWS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;