import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 relative bg-[#050505] border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-mono font-bold text-lg tracking-tighter text-white">
            HARIJITH<span className="text-neon-blue">.R</span>
          </span>
          <p className="text-sm text-gray-500 mt-2">
            Senior System Engineer & Security Specialist
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Harijith-R"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue hover:scale-110 transition-all hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/harijith-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:harijith321@gmail.com"
            className="text-gray-400 hover:text-neon-purple hover:scale-110 transition-all hover:drop-shadow-[0_0_10px_rgba(176,38,255,0.8)]"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} Harijith R. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
