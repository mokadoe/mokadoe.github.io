import React from 'react';
import { SectionId } from '../types';
import { Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.Contact} className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-6">Start building the future with us.</h2>
          
          <a 
            href="mailto:hello@mokadoe.ai"
            className="flex items-center gap-3 text-2xl md:text-4xl font-light hover:text-mokadoe-primary transition-colors mb-12"
          >
            <Mail className="w-8 h-8 md:w-10 md:h-10" />
            hello@mokadoe.ai
          </a>

          <p className="text-gray-600 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Mokadoe.ai. Made with <Heart className="w-3 h-3 text-red-500 fill-current" />.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;