import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] bg-brand-light flex flex-col items-center justify-center p-4 text-center font-sans">
      <SEO
        title="Página não encontrada | Cavanhaque"
        description="A página que você está procurando não existe ou foi movida."
      />
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-dark/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
          
          <h1 className="text-6xl font-serif font-black text-brand-dark mb-4 tracking-tighter">
            4<span className="text-brand-gold">0</span>4
          </h1>
          
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-widest">
            Página não encontrada
          </h2>
          
          <p className="text-gray-500 mb-10 leading-relaxed">
            Parece que o caminho que você tentou acessar não existe ou o conteúdo foi movido para outro lugar do nosso manual.
          </p>
          
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 shadow-xl group"
          >
            <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
