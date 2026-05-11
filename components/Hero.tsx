import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const Hero: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('loja');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Priority LCP */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
        <OptimizedImage
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2000&auto=format&fit=crop"
          alt="Homem com barba bem cuidada em ambiente escuro e sofisticado"
          className="w-full h-full object-cover opacity-60"
          priority={true}
          sizes="100vw"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-20"></div>
      </div>

      {/* Background circles effect (kept but simplified) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 border border-brand-gold text-brand-gold text-xs tracking-[0.2em] uppercase mb-8 animate-reveal-up bg-zinc-900/30">
            Estilo & Sofisticação
          </span>

          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight animate-reveal-up delay-100">
            Sua Barba Merece <br />
            <span className="inline-block mt-2">
              <span className="text-shine italic">Respeito</span>
            </span> e Cuidado.
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto animate-reveal-up delay-200">
            Produtos naturais, testados em barbas reais e aprovados por milhares de homens.
            Eleve seu ritual de cuidados diários.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal-up delay-300">
            <a
              href="#loja"
              onClick={scrollToProducts}
              className="w-full sm:w-auto px-10 py-5 bg-brand-gold text-brand-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/20 text-sm group"
            >
              Ver Produtos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/blog"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-zinc-700 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300 text-sm text-center flex items-center justify-center"
            >
              Ler o Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;