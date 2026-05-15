import React from 'react';
import { Users, ShieldCheck, Truck, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    {
      icon: <Users size={28} />,
      value: "+15.000",
      label: "Barbudos Satisfeitos",
      sub: "Em todo o Brasil"
    },
    {
      icon: <Star size={28} />,
      value: "4.9/5",
      label: "Avaliação Média",
      sub: "Qualidade comprovada"
    },
    {
      icon: <Truck size={28} />,
      value: "24h",
      label: "Envio Rápido",
      sub: "Despacho imediato"
    },
    {
      icon: <ShieldCheck size={28} />,
      value: "100%",
      label: "Garantia Total",
      sub: "Satisfação ou reembolso"
    }
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-10 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-3 text-brand-gold bg-brand-dark/5 p-3 rounded-full group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                {stat.icon}
              </div>
              <span className="text-2xl md:text-3xl font-bold text-brand-dark font-serif leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-brand-charcoal uppercase tracking-wide mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
