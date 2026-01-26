import React, { useState } from 'react';
import { INITIAL_BLOG_POSTS } from '../constants';
import { ArrowRight, Loader2, X, Calendar, Clock } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const generateNewPost = async () => {
    setIsGenerating(true);
    const topics = ["Future Interfaces", "WebGPU", "Edge Computing", "Neural Networks in JS", "The End of CSS", "Quantum Web"];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    try {
      const content = await geminiService.generateBlogPost(randomTopic);
      const newPost: BlogPost = {
        id: `gen-${Date.now()}`,
        title: randomTopic,
        excerpt: content.slice(0, 150) + "...",
        date: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }),
        readTime: "01 min",
        tags: ["AI", "AUTO-GEN"],
        content: content
      };
      setPosts(prev => [newPost, ...prev]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-32 px-4 lg:px-12 max-w-[1600px] mx-auto border-t border-white/5 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 reveal-left">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white">
          DEV <span className="text-zinc-700">LOGS</span>
        </h2>
        
        <button 
          onClick={generateNewPost}
          disabled={isGenerating}
          className="group flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition-all rounded-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <Loader2 className="animate-spin text-indigo-500" size={18} />
          ) : (
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          )}
          <span className="font-mono text-sm text-zinc-300 group-hover:text-white">
            {isGenerating ? 'GENERATING...' : 'GENERATE_ENTRY'}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((post, idx) => {
          // Check for  a newly generated post 
          const isGenerated = post.id.startsWith('gen-');
          
          return (
            <article 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className={`group flex flex-col h-full justify-between border-t-2 border-zinc-900 pt-6 hover:border-indigo-500 transition-all duration-500 cursor-pointer hover:-translate-y-2 ${isGenerated ? 'animate-fade-in-up' : 'reveal-scale'}`}
              style={{ transitionDelay: isGenerated ? '0ms' : `${idx * 100}ms` }}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                     {post.tags.map(tag => (
                       <span key={tag} className="text-[10px] uppercase font-mono border border-zinc-800 px-2 py-0.5 rounded text-zinc-500 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
                         {tag}
                       </span>
                     ))}
                  </div>
                  <span className="font-mono text-xs text-zinc-600">{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-zinc-100 mb-4 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 duration-300">
                READ_ENTRY <ArrowRight size={14} />
              </div>
            </article>
          );
        })}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-[#050505] border border-zinc-800 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl relative shadow-2xl animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#050505]/95 backdrop-blur z-10 border-b border-white/5 p-6 flex justify-between items-start">
               <div>
                  <div className="flex gap-2 mb-3">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h3>
               </div>
               <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
               <div className="flex gap-6 text-xs font-mono text-zinc-500 mb-8 border-b border-white/5 pb-4">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {selectedPost.date}</span>
                  <span className="flex items-center gap-2"><Clock size={14} /> {selectedPost.readTime}</span>
               </div>
               
               <div className="prose prose-invert prose-zinc max-w-none">
                  {selectedPost.content ? (
                    selectedPost.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-zinc-300 leading-7 text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-zinc-500 italic">Content not available.</p>
                  )}
               </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-white/5 bg-zinc-900/30">
               <p className="text-center text-zinc-600 text-xs font-mono">
                 END_OF_LOG // SHOWZY.DEV
               </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;