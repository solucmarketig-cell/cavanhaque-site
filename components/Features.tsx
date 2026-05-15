import React from 'react';
import { Leaf, Award, Recycle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: "Produtos Naturais",
      desc: "Matérias-primas de origem vegetal, livres de sulfatos e petrolatos."
    },
    {
      icon: <Award size={32} />,
      title: "Testado em Barbudos",
      desc: "Nada de testes em animais. Só em barbas de verdade, por quem usa."
    },
    {
      icon: <Recycle size={32} />,
      title: "Carbono Neutro",
      desc: "Compensamos 100% das emissões de carbono, da fabricação à entrega."
    }
  ];

  return (
    <section className="bg-stone-200 py-16 text-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="mb-4 p-4 rounded-full bg-brand-charcoal text-brand-gold group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
