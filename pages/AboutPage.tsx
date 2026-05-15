import React, { useEffect } from 'react';
import { ShieldCheck, Target, Heart, Award, Star, ArrowRight, FlaskConical, Scissors, Users, Sparkles, Coffee, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO
        title="Quem Somos | Cavanhaque - Guia de Estilo e Grooming Masculino"
        description="Conheça o Cavanhaque, o guia definitivo para o homem moderno que decidiu se cuidar. Orientação, autoestima e recomendações de produtos premium."
        keywords="sobre cavanhaque, grooming masculino, cuidados masculinos, estilo masculino, barba premium"
        canonicalUrl="https://cavanhaque.com/quem-somos"
      />
      {/* Hero Section */}
      <section className="bg-brand-dark py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.webp')]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block animate-fade-in-up">
            Muito mais que um Blog, seu Guia de Estilo
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Para o Homem que <br /><span className="text-brand-gold italic">Decidiu</span> se Cuidar.
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Existimos para transformar o ritual de grooming em um momento de poder, elegância e autoconfiança.
          </p>
        </div>
      </section>

      {/* Narrative Section - Humanized Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <OptimizedImage
              src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=1200&auto=format&fit=crop"
              alt="O Homem Contemporâneo"
              className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-brand-gold/20">
              <span className="block text-brand-gold font-serif italic text-lg mb-1">Acreditamos que...</span>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-widest leading-relaxed">
                Um bom corte abre portas, <br />mas a confiança as atravessa.
              </span>
            </div>
          </div>

          <div className="prose prose-lg">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-8">Nossa Missão é Você</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Sabemos que olhar-se no espelho e gostar do que vê é o primeiro passo para um dia de sucesso. O <strong>Cavanhaque</strong> nasceu não para ditar regras, mas para ser o seu braço direito na busca por um estilo que exala modernidade e elegância.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nosso intuito é orientar. Queremos que você entenda seu tipo de fio, o formato do seu rosto e como cada detalhe do seu cabelo e barba pode elevar sua autoestima a novos patamares.
            </p>
            <div className="bg-brand-light p-8 rounded-2xl border-l-4 border-brand-gold my-10">
              <p className="text-brand-charcoal italic font-medium mb-0">
                "Não indicamos apenas produtos; recomendamos ferramentas de transformação. Tudo o que você encontra aqui foi testado e aprovado sob o olhar criterioso de quem entende que o cuidado masculino é uma forma de respeito próprio."
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Trabalhamos incansavelmente para trazer as melhores recomendações do mercado. Nossas indicações dentro do site são pensadas para facilitar sua vida, garantindo que você use exatamente o que sua barba ou cabelo precisam, sem desperdício e com resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-charcoal py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Como Ajudamos Você</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-dark text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/30">
                <Compass size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Orientação</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Guiamos você por meio de tutoriais e artigos científicos traduzidos para a vida real, para que você seja o mestre da sua própria imagem.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-dark text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/30">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Autoestima</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trabalhamos para que cada homem se sinta elegante e moderno. Acreditamos que a beleza masculina está na atenção aos detalhes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-dark text-brand-gold rounded-full flex items-center justify-center mx-auto border border-brand-gold/30">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Recomendações</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Selecionamos a dedo os melhores produtos do mercado. Quando recomendamos algo, é porque acreditamos na eficácia daquela solução para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Connection Quote */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Heart className="text-red-500 mx-auto mb-8 animate-pulse" size={40} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-10 leading-tight">
            "Sua barba e seu cabelo contam uma história. <br />
            <span className="text-brand-gold">Nós ajudamos você a escrever os melhores capítulos."</span>
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-brand-gold p-1 shadow-2xl">
              <OptimizedImage src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop" alt="Equipe Cavanhaque" className="w-full h-full object-cover rounded-full" sizes="80px" />
            </div>
            <span className="text-brand-dark font-black uppercase tracking-widest text-xs">A Família Cavanhaque</span>
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mt-1">Grooming & Estilo de Vida</span>
          </div>
        </div>
      </section>

      {/* CTA Section - Sales integration */}
      <section className="bg-brand-light py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Pronto para o seu novo ritual?</h2>
          <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            Não perca tempo com produtos que não funcionam. Confira nossas recomendações exclusivas baseadas no que há de mais moderno na barbearia mundial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/kits" className="px-12 py-5 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all shadow-2xl flex items-center justify-center gap-3">
              Ver Recomendações <ArrowRight size={18} />
            </Link>
            <Link to="/blog" className="px-12 py-5 bg-white border-2 border-brand-dark text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all flex items-center justify-center gap-3">
              Aprender Grátis <Users size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
