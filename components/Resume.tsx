import React from 'react';
import { Download, Eye, FileText, Smartphone, QrCode } from 'lucide-react';

const Resume: React.FC = () => {
  // Path to  PDF 
  const resumePath = "/assets/cv/Ezekiel_Shalom_Williams_CV.pdf";
  const portfolioUrl = "https://shalomezekiel.vercel.app"; // domain

  return (
    <section id="resume" className="py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/5 p-8 md:p-16 text-center animate-float-delayed reveal-right">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-8 ring-1 ring-white/10 shadow-lg backdrop-blur-sm animate-float">
            <FileText size={40} className="text-zinc-100" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-indigo-400">Resume</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-2xl">
            A comprehensive overview of my experience, technical stack, and contributions. 
            Designed for clarity, ATS compatibility, and quick review.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={resumePath}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl font-bold font-mono text-sm transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20"
              >
                <Eye size={18} className="group-hover:scale-110 transition-transform" />
                <span>PREVIEW_PDF</span>
              </a>
              
              <a 
                href={resumePath}
                download="Ezekiel_Shalom_Williams_CV.pdf"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold font-mono text-sm transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 flex items-center justify-center gap-3 group transform hover:-translate-y-1"
              >
                <Download size={18} className="group-hover:scale-110 transition-transform" />
                <span>DOWNLOAD_CV</span>
              </a>
            </div>
            
            {/* Divider for Desktop */}
            <div className="hidden md:block w-px h-16 bg-zinc-800"></div>

            {/* QR Code Section */}
            <div className="group relative flex items-center gap-4 bg-black/40 p-3 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-black/60">
               <div className="bg-white p-2 rounded-lg">
                 <img 
                   src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${portfolioUrl}&bgcolor=ffffff`}
                   alt="Portfolio QR" 
                   className="w-16 h-16 object-contain"
                 />
               </div>
               <div className="text-left pr-2">
                 <div className="text-xs font-mono text-indigo-400 flex items-center gap-1 mb-1">
                   <QrCode size={12} /> SCAN_TO_GO
                 </div>
                 <div className="text-sm font-bold text-white">Mobile Profile</div>
                 <div className="text-[10px] text-zinc-500">Take it with you</div>
               </div>
            </div>
          </div>

          {/* Features / Meta */}
          <div className="pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left sm:text-center">
             <div className="flex flex-col sm:items-center gap-1 hover:text-white transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Format</span>
                <span className="text-zinc-300 font-medium">Standard PDF</span>
             </div>
             <div className="flex flex-col sm:items-center gap-1 hover:text-white transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Size</span>
                <span className="text-zinc-300 font-medium">2 MB</span>
             </div>
             <div className="flex flex-col sm:items-center gap-1 hover:text-white transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Updated</span>
                <span className="text-zinc-300 font-medium">October 2025</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;