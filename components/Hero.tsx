import React from 'react';
import { SectionId } from '../types';
import { Rocket } from 'lucide-react';

interface HeroProps {
  scrollTo: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  return (
    <section id={SectionId.Home} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob bg-mokadoe-primary w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/4 animate-pulse"></div>
      <div className="blob bg-mokadoe-secondary w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="blob bg-mokadoe-accent w-64 h-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          <span className="text-sm font-mono text-gray-300">Accepting new concepts</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="block text-white">We incubate</span>
          <span className="block gradient-text mt-2 pb-4">Intelligence.</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          Mokadoe.ai is a launchpad for the next generation of AI-forward apps and tools. We turn algorithms into products.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollTo(SectionId.About)}
            className="group relative px-8 py-4 bg-white text-mokadoe-dark font-bold rounded-full hover:bg-gray-100 transition-all active:scale-95 flex items-center gap-2"
          >
            How We Work
            <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollTo(SectionId.Contact)}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all active:scale-95"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;