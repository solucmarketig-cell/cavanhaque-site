import React, { useEffect } from 'react';
import { Quote, Shield, Zap, Anchor, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const ManifestoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      number: "01",
      title: "O Rosto é o seu Cartão de Visitas",
      text: "Não aceitamos o desleixo. Acreditamos que cada linha, cada contorno e cada fio de cabelo comunica quem você é antes mesmo de você dizer a primeira palavra."
    },
    {
      number: "02",
      title: "Ritual sobre Rotina",
      text: "Grooming não é uma tarefa doméstica; é um ritual de passagem diário. É o momento em que o homem se prepara para as batalhas do dia, alinhando sua imagem com sua ambição."
    },
    {
      number: "03",
      title: "Ciência e Natureza em Equilíbrio",
      text: "Rejeitamos produtos vazios. Buscamos a eficácia dos ativos científicos aliada à pureza dos ingredientes naturais. Se não traz resultado real, não tem espaço no nosso arsenal."
    },
    {
      number: "04",
      title: "A Autenticidade como Regra",
      text: "Não vendemos fórmulas mágicas. Vendemos ferramentas para que você encontre sua versão mais autêntica, seja ela um cavanhaque milimétrico ou uma barba épica de lenhador."
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark">
      <SEO
        title="Manifesto | Cavanhaque - Nossa Visão e Princípios"
        description="Conheça os princípios que regem o Cavanhaque. Acreditamos no ritual de cuidado pessoal como forma de auto-respeito e excelência masculina."
        keywords="manifesto cavanhaque, princípios grooming, filosofia masculina, auto-respeito homem"
        canonicalUrl="https://cavanhaque.com/manifesto"
      />

      {/* Hero Imersivo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1503460293376-302bb3d7539a?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-40 scale-110"
            alt="Manifesto Background"
            width={1920}
            height={1080}
            priority={true}
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-brand-gold"></div>
          </div>
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">
            The Cavanhaque Creed
          </span>
          <h1 className="text-5xl md:text-9xl font-serif font-bold mb-8 leading-tight tracking-tighter">
            Manifesto <br />
            <span className="text-brand-gold italic">Cavanhaque</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Uma declaração de princípios para o homem que entende que o cuidado pessoal é a forma mais elevada de auto-respeito.
          </p>
        </div>
      </section>

      {/* Seção Grande Frase */}
      <section className="py-32 bg-brand-dark px-4">
        <div className="max-w-4xl mx-auto">
          <Quote className="text-brand-gold/20 mb-10 mx-auto" size={80} />
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-center leading-tight mb-12">
            "A barba não é um escudo para esconder o rosto, <span className="text-brand-gold italic">é um estandarte</span> para declarar sua personalidade."
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Os Pilares - Grid Assimétrico */}
      <section className="py-24 bg-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            {principles.map((p, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <span className="text-6xl md:text-8xl font-serif font-black text-white/5 mb-[-30px] z-0 ml-[-10px]">
                  {p.number}
                </span>
                <div className="relative z-10 border-t border-brand-gold/30 pt-8">
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-brand-gold mb-4">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Compromisso */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Nosso <span className="text-brand-gold">Compromisso</span> com a Excelência.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Não somos apenas produtores de conteúdo. Somos curadores do que há de melhor no grooming mundial. Cada produto recomendado em nossas páginas passa por um rigoroso processo de seleção: só indicamos o que nós mesmos usaríamos diante do espelho.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-brand-gold font-bold text-2xl">0%</span>
                <span className="text-[10px] uppercase font-black tracking-widest text-gray-500">Comprometimento com Marcas Ruins</span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-gold font-bold text-2xl">100%</span>
                <span className="text-[10px] uppercase font-black tracking-widest text-gray-500">Focado na sua Autoestima</span>
              </div>
            </div>
          </div>
          <div className="bg-brand-gold p-10 rounded-2xl text-brand-dark flex flex-col justify-center items-center text-center">
            <Shield size={48} className="mb-6" />
            <h4 className="font-black uppercase tracking-tighter text-2xl mb-4">Selo de Qualidade Cavanhaque</h4>
            <p className="text-sm font-medium mb-0">
              Testado, aprovado e recomendado por quem vive a cultura da barba todos os dias.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-white py-24 text-brand-dark text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Anchor className="text-brand-gold mx-auto mb-8" size={40} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Junte-se à <br /> Revolução do Estilo.
          </h2>
          <p className="text-gray-600 mb-12 text-lg font-medium">
            O Manifesto é apenas o começo. O próximo passo é transformar essas ideias em ação no seu ritual diário.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/kits" className="px-12 py-5 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all shadow-2xl flex items-center justify-center gap-3">
              Ver Produtos <ArrowRight size={18} />
            </Link>
            <Link to="/blog" className="px-12 py-5 bg-transparent border-2 border-brand-dark text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all flex items-center justify-center gap-3">
              Manual do Homem <Zap size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManifestoPage;