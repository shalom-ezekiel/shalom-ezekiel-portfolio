import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Cpu, Terminal as TerminalIcon, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "System online. Ask me about Shalom's projects or skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    geminiService.initializeChat();
  }, []);

  //  scroll method TO BOTTOM
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opened
      setTimeout(() => {
         inputRef.current?.focus();
      }, 300);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await geminiService.sendMessage(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-zinc-900 border border-zinc-700 hover:border-indigo-500 rounded-full shadow-2xl transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-indigo-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div className="relative flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <TerminalIcon className="w-5 h-5 text-zinc-100" />
          </div>
        </button>
      )}

      {/* Chat  Terminal Style */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[95vw] md:w-[450px] bg-[#050505] border border-zinc-800 rounded-lg shadow-2xl transition-all duration-500 origin-bottom-right flex flex-col font-mono ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '600px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="p-3 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 rounded-t-lg">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Cpu size={14} className="text-indigo-500" />
            <span>AI_ASSISTANT // TERMINAL</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
              <Minimize2 size={14} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-zinc-800"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px]">
                {msg.role === 'user' ? 'USER' : 'SYSTEM'}
              </div>
              <div
                className={`p-3 max-w-[90%] border ${
                  msg.role === 'user'
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-200 rounded-l-lg rounded-br-lg'
                    : 'bg-indigo-900/10 border-indigo-500/30 text-indigo-300 rounded-r-lg rounded-bl-lg'
                }`}
              >
                {msg.role === 'model' && <span className="text-indigo-500 mr-2">$</span>}
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-center gap-2 text-indigo-500 p-2">
                <span className="animate-pulse">PROCESSING_QUERY...</span>
             </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-zinc-800 bg-black/50">
          <div className="flex gap-2 items-center">
            <span className="text-indigo-500">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter command..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-zinc-100 font-mono placeholder-zinc-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;