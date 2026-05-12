import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  tip?: string;
}

interface TutorialStepsProps {
  steps: Step[];
  category?: string;
}

const TutorialSteps: React.FC<TutorialStepsProps> = ({ steps, category = 'Estilo' }) => {
  return (
    <div className="my-16 space-y-12">
      <h2 className="text-3xl font-serif font-bold text-brand-dark mb-12 flex items-center gap-4">
        <Zap className="text-brand-gold fill-brand-gold shrink-0" size={32} />
        Guia Passo a Passo
      </h2>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-gold/20 hidden md:block"></div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 group" id={`step-${index + 1}`}>
              {/* Number Circle */}
              <div className="hidden md:flex absolute left-0 w-12 h-12 bg-white border-2 border-brand-gold rounded-full z-10 items-center justify-center font-bold text-brand-dark group-hover:bg-brand-gold transition-colors shadow-sm">
                {index + 1}
              </div>
              
              <div className="md:ml-20 flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="md:hidden mb-4 flex items-center gap-2 text-brand-gold font-black uppercase text-xs tracking-widest">
                   Passo {index + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                
                {step.tip && (
                  <div className="bg-brand-light p-4 rounded-xl border-l-4 border-brand-gold flex gap-3 italic text-sm text-brand-charcoal">
                    <span className="font-bold text-brand-gold">Dica:</span>
                    {step.tip}
                  </div>
                )}
                
                <div className="absolute top-6 right-6 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors pointer-events-none">
                   <CheckCircle2 size={48} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialSteps;
