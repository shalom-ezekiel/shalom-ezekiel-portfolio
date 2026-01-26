import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import { Section } from './types';
import { SOCIAL_LINKS } from './constants';
import { Menu, X, Terminal, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        // Main cursor
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Follower with lag
        followerRef.current.animate({
          transform: `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`
        }, {
          duration: 800,
          fill: "forwards"
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block" 
        style={{ marginTop: '-6px', marginLeft: '-6px' }}
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[99] mix-blend-difference hidden md:block transition-opacity duration-300" 
      />
    </>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Disable default browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    return () => {
       if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    }
  }, []);

  // Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const selectors = ['.reveal-on-scroll', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scroll Spy Observer
  useEffect(() => {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Map id to Section enum
          const id = entry.target.id;
          if (id === 'hero') setActiveSection(Section.HERO);
          if (id === 'projects') setActiveSection(Section.PROJECTS);
          if (id === 'skills') setActiveSection(Section.SKILLS);
          if (id === 'resume') setActiveSection(Section.RESUME);
          if (id === 'blog') setActiveSection(Section.BLOG);
        }
      });
    }, { threshold: 0.3 }); // 30% visibility to trigger

    const sections = document.querySelectorAll('main > div[id]');
    sections.forEach(section => spyObserver.observe(section));

    return () => spyObserver.disconnect();
  }, []);

  const scrollToSection = (section: Section, id: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: '// HOME', section: Section.HERO, id: 'hero' },
    { label: '// WORK', section: Section.PROJECTS, id: 'projects' },
    { label: '// EXPERTISE', section: Section.SKILLS, id: 'skills' },
    { label: '// RESUME', section: Section.RESUME, id: 'resume' },
    { label: '// LOGS', section: Section.BLOG, id: 'blog' },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100 selection:bg-indigo-500/90 selection:text-black relative">
      <CustomCursor />
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0 mix-blend-overlay noise-overlay"></div>

      {/* Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-white/20">
          <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
            SHOWZY.DEV
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section, item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeSection === item.section 
                    ? 'bg-zinc-100 text-black font-bold scale-105' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-6 md:hidden animate-fade-in">
           <div className="flex flex-col gap-8 text-4xl font-display font-bold tracking-tight">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section, item.id)}
                className={`text-left py-4 border-b border-white/10 transition-colors ${
                  activeSection === item.section ? 'text-indigo-400' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item.label.replace('// ', '')}
              </button>
            ))}
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <div id="hero" className="min-h-screen">
          <Hero />
        </div>
        <div id="projects" className="bg-transparent">
          <Projects />
        </div>
        <div id="skills" className="bg-transparent">
          <Skills />
        </div>
        <div id="resume" className="bg-transparent">
          <Resume />
        </div>
        <div id="blog" className="bg-transparent pb-20">
          <Blog />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative overflow-hidden reveal-on-scroll">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
             <div className="font-display font-bold text-2xl tracking-tighter">SHOWZY.DEV</div>
             <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
               Crafting the next generation of web experiences with precision, passion, and AI-driven insights.
             </p>
             <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mt-2">
              <Terminal size={14} />
              <span>EXECUTION_TIME: 24ms</span>
            </div>
          </div>

          {/* Links Col */}
          <div className="flex flex-col gap-2">
             <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Navigation</h4>
             {navItems.map(item => (
               <button key={item.label} onClick={() => scrollToSection(item.section, item.id)} className="text-left text-zinc-500 hover:text-indigo-400 transition-colors text-sm">
                 {item.label}
               </button>
             ))}
          </div>

          {/* Socials Col */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Connect</h4>
             <div className="flex items-center gap-4">
               <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all hover:-translate-y-1"><Github size={18} /></a>
               <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all hover:-translate-y-1"><Linkedin size={18} /></a>
               <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all hover:-translate-y-1"><Twitter size={18} /></a>
               <a href={SOCIAL_LINKS.EMAIL} className="p-2 bg-zinc-900 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all hover:-translate-y-1"><Mail size={18} /></a>
             </div>
             <a href={SOCIAL_LINKS.EMAIL} className="text-sm text-zinc-500 hover:text-indigo-400 mt-2 block">
               shalomezekiel112@gmail.com
             </a>
          </div>

          {/* QR Col */}
          <div className="flex flex-col gap-2 items-start md:items-end">
             <div className="bg-white p-2 rounded-xl">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://shalomezekiel.vercel.app" 
                 alt="Scan" 
                 className="w-24 h-24"
               />
             </div>
             <div className="text-right">
                <div className="text-xs font-bold text-white mt-1">SCAN_ME</div>
                <div className="text-[10px] text-zinc-500 font-mono">Mobile Portfolio</div>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-zinc-600 text-xs font-display uppercase tracking-widest">
              © 202 Shalom Ezekiel. Engineered with Passion.
            </p>
            <div className="flex gap-4 text-xs text-zinc-600">
               <span>Privacy</span>
               <span>Terms</span>
               <span>Sitemap</span>
            </div>
        </div>
      </footer>

      {/* AI Assistant Bot */}
      <AIChat />
    </div>
  );
};

export default App;