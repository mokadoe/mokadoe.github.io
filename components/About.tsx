import React from 'react';
import { SectionId } from '../types';
import { Cpu, Zap, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-mokadoe-primary" />,
      title: "AI-First Architecture",
      desc: "We build from the model up. Every app starts with a core intelligence capability."
    },
    {
      icon: <Zap className="w-6 h-6 text-mokadoe-secondary" />,
      title: "Rapid Prototyping",
      desc: "From concept to MVP in weeks. We use cutting-edge frameworks to ship fast."
    },
    {
      icon: <Globe className="w-6 h-6 text-mokadoe-accent" />,
      title: "Global Scalability",
      desc: "Cloud-native solutions designed to handle millions of requests from day one."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Human Centric",
      desc: "AI is the tool, humans are the heroes. We design for user empowerment."
    }
  ];

  return (
    <section id={SectionId.About} className="py-24 bg-black/20 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-mokadoe-primary">Mokadoe</span> Method</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We aren't just a dev shop. We are a laboratory for the future of software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-mokadoe-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;