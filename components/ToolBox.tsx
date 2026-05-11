import React from 'react';
import { Hammer, Scissors, Ruler, Droplets } from 'lucide-react';

interface Tool {
  name: string;
  link: string;
}

interface ToolBoxProps {
  tools: Tool[];
}

const ToolBox: React.FC<ToolBoxProps> = ({ tools }) => {
  return (
    <div className="bg-brand-charcoal rounded-3xl p-8 my-12 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Hammer size={120} />
      </div>
      
      <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold relative z-10">Arsenal Necessário</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {tools.map((tool, index) => (
          <a 
            key={index} 
            href={tool.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all group"
          >
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center text-brand-dark shrink-0">
               {index % 2 === 0 ? <Scissors size={20} /> : <Droplets size={20} />}
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold uppercase tracking-wider block">{tool.name}</span>
              <span className="text-[10px] text-brand-gold font-bold">Ver no Mercado Livre →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolBox;
