import React from 'react';
import { Timer, CheckCircle2, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const LimitedOffer: React.FC = () => {
  const affiliateLink = "https://mercadolivre.com/sec/2Wo6ZWc";

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-brand-charcoal to-black rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 flex flex-col md:flex-row">

          {/* Image Section */}
          <div className="md:w-1/2 relative min-h-[400px]">
            <OptimizedImage
              src="https://http2.mlstatic.com/D_NQ_NP_2X_874427-MLB89338486261_082025-F-kit-lenhador-black-friday-barba-shampoo-oleo-balm-pente.webp"
              alt="Kit Lenhador Supremo Edição de Colecionador"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              width={600}
              height={400}
            />
            <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest animate-pulse shadow-lg z-10">
              Últimas 12 Unidades
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
            <div className="flex items-center gap-2 text-brand-gold mb-4">
              <Timer size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Oferta Relâmpago</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
              Kit "Lenhador Supremo" <br />
              <span className="text-gray-400 text-xl font-sans font-normal">Edição de Colecionador</span>
            </h2>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-gray-500 line-through text-lg">R$ 185,00</span>
              <span className="text-brand-gold text-4xl font-bold">R$ 165,09</span>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              O arsenal completo para o homem que não aceita menos que a perfeição.
              Inclui óleo premium, balm, shampoo, pente de madeira e nécessaire exclusiva.
              <br /><strong className="text-white font-bold">Essa oferta exclusiva no Mercado Livre não será repetida.</strong>
            </p>

            <ul className="space-y-3 mb-8">
              {['Frete Grátis Expresso', 'Acesso VIP à comunidade', 'Garantia de Qualidade Premium'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-gold hover:bg-white text-brand-dark font-bold py-5 px-8 rounded uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 text-center"
            >
              Quero Aproveitar Agora
              <ArrowRight size={20} />
            </a>

            <p className="text-center text-xs text-gray-500 mt-4">
              *Promoção válida enquanto durarem os estoques no link oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
