
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, CheckCircle2, Gift, Zap, ShieldCheck, ArrowRight, Info, ExternalLink, Film, FlaskConical, Trophy, Sparkles } from 'lucide-react';
import { Product } from '../types';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const kitsData: Product[] = [
  {
    id: 'k-elite-180',
    name: 'Preenchedor De Falhas Para Barba Fator Viking Kit 6 Meses Fator De Crescimento',
    price: 503.58,
    originalPrice: 719.40,
    rating: 5,
    reviews: 4250,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_753415-MLB92697620363_092025-F.webp',
    badges: ['ULTRA DENSIDADE', 'ECONOMIA MÁXIMA'],
    externalLink: 'https://mercadolivre.com/sec/1exasrj'
  },
  {
    id: 'k-dermaroller-1',
    name: 'Kit Dermaroller Facial para Crescimento de Barba e Preenchimento',
    price: 89.90,
    originalPrice: 129.90,
    rating: 5,
    reviews: 1250,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_887695-MLA99845460091_112025-F.webp',
    badges: ['PREENCHEDOR', 'ESTIMULANTE'],
    externalLink: 'https://mercadolivre.com/sec/28LNYBa'
  },
  {
    id: 'k-luxury-sandalo',
    name: 'Taiff Profissional Black Ion Secador De Cabelo 2000 Watts',
    price: 212.61,
    originalPrice: 362.50,
    rating: 5,
    reviews: 890,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_638358-MLA99582065382_122025-F.webp',
    badges: ['PROFISSIONAL', '2000 WATTS'],
    externalLink: 'https://mercadolivre.com/sec/2s3xABW'
  },
  {
    id: 'k-mixidil-5',
    name: 'Diga Adeus A Calvície C/ Mixidil Resultado Garantido Kit 5',
    price: 115.36,
    originalPrice: 169.90,
    rating: 5,
    reviews: 3120,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_943715-MLB98975804745_112025-F.webp',
    badges: ['RESULTADO GARANTIDO', 'TRATAMENTO 5 MESES'],
    externalLink: 'https://meli.la/1ek2JKf'
  },
  {
    id: 'p-shampoo-bomba',
    name: 'Shampoo Bomba de Crescimento - Ativação Folicular',
    price: 101.15,
    originalPrice: 119.00,
    rating: 5,
    reviews: 2450,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_790496-MLB93969374975_102025-F.webp',
    badges: ['O MAIS PEDIDO', 'FRETE GRÁTIS'],
    externalLink: 'https://mercadolivre.com/sec/28LNYBa'
  },
  {
    id: 'k1',
    name: 'Kit Crescimento de Barba 90 Dias',
    price: 143.82,
    originalPrice: 239.70,
    rating: 5,
    reviews: 1540,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_864277-MLB96378298659_102025-F-produto-para-crescer-barba-tratamento-completo-90-dias.webp',
    badges: ['CAMPEÃO DE BUSCAS', 'FRETE GRÁTIS'],
    externalLink: 'https://mercadolivre.com/sec/2GpwMsG'
  },
  {
    id: 'k2',
    name: 'Kit Barba de Respeito Completo',
    price: 159.90,
    originalPrice: 189.90,
    rating: 4.9,
    reviews: 890,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_686167-MLB73023729926_112023-F.webp',
    badges: ['O FAVORITO', 'MAIS VENDIDO'],
    externalLink: 'https://meli.la/2RrJUBZ'
  },
  {
    id: 'k3',
    name: 'Combo Shaving Clássico safety Razor',
    price: 96.67,
    originalPrice: 119.90,
    rating: 4.8,
    reviews: 420,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_658702-MLB76452930004_052024-F-barbeador-borda-dupla-safety-qshave-5-lminas-classico.webp',
    badges: ['VINTAGE', 'OFERTA'],
    externalLink: 'https://meli.la/1TffqFZ'
  },
  {
    id: 'k4',
    name: 'Kit Cabelo e Barba Nevou Platinado',
    price: 181.89,
    originalPrice: 199.90,
    rating: 4.7,
    reviews: 310,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_957399-MLB92308295446_092025-F.webp',
    badges: ['VIRAL', 'PLATINADO'],
    externalLink: 'https://mercadolivre.com/sec/1LDf45D'
  },
  {
    id: 'k5',
    name: 'Arsenal do Lenhador - Óleo + Balm + Pente',
    price: 170.20,
    originalPrice: 185.00,
    rating: 5,
    reviews: 670,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_874427-MLB89338486261_082025-F-kit-lenhador-black-friday-barba-shampoo-oleo-balm-pente.webp',
    badges: ['ESSENCIAL', 'OFERTA'],
    externalLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'k6',
    name: 'Kit Terapia Anti-Queda e Fortalecimento',
    price: 68.25,
    originalPrice: 105.00,
    rating: 4.9,
    reviews: 540,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_836374-MLA99399326762_112025-F.webp',
    badges: ['RECOMENDADO', 'MELHOR PREÇO'],
    externalLink: 'https://mercadolivre.com/sec/2LyTJhR'
  },
  {
    id: 'k7',
    name: 'Combo Viagem Premium Nécessaire Couro',
    price: 120.65,
    originalPrice: 127.00,
    rating: 5,
    reviews: 120,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_991951-MLB88998275175_072025-F.webp',
    badges: ['LUXO', 'VIAJANTE'],
    externalLink: 'https://mercadolivre.com/sec/1xZHvR4'
  },
  {
    id: 'k8',
    name: 'Kit Presente Dia dos Pais - Edição Ouro',
    price: 144.00,
    originalPrice: 260.00,
    rating: 5,
    reviews: 205,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_725884-MLB93507267903_092025-F.webp',
    badges: ['PRESENTE', 'PREMIUM'],
    externalLink: 'https://mercadolivre.com/sec/1XtGMwP'
  },
  {
    id: 'k9',
    name: 'TRESemmé Xampu, condicionador e desembaraçador 3 em 1, pacote com 3 para limpar, condicionar e desembaraçar, com vitamina C profissional e chá verde, 800 ml',
    price: 370.96,
    originalPrice: 450.00,
    rating: 4.6,
    reviews: 380,
    image: 'https://m.media-amazon.com/images/I/71cQg8IvUnL._AC_SL1500_.jpg',
    badges: ['LIMPEZA', 'DETOX'],
    externalLink: 'https://amzn.to/4pv6rd1'
  },
  {
    id: 'k10',
    name: 'Kit Hidratação Profunda Sândalo',
    price: 78.89,
    originalPrice: 112.71,
    rating: 4.9,
    reviews: 450,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_719213-MLA99338536468_112025-F.webp',
    badges: ['AROMA PREMIUM', 'OFERTA'],
    externalLink: 'https://mercadolivre.com/sec/2yjT1DS'
  },
  {
    id: 'k11',
    name: 'Kit Barba Cerrada - Aparador + Gel',
    price: 354.00,
    originalPrice: 429.90,
    rating: 4.8,
    reviews: 330,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_776482-MLB88022061005_072025-F.webp',
    badges: ['PROFISSIONAL', 'SUPER DESCONTO'],
    externalLink: 'https://mercadolivre.com/sec/29knvqc'
  },
  {
    id: 'k12',
    name: 'Combo Crescimento de Sobrancelha e Barba',
    price: 30.98,
    originalPrice: 49.90,
    rating: 4.7,
    reviews: 210,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_827676-MLA99415112558_112025-F.webp',
    badges: ['PROMOÇÃO', 'DUPLA AÇÃO'],
    externalLink: 'https://mercadolivre.com/sec/14RoPKW'
  },
  {
    id: 'k13',
    name: 'Kit Ritual Matinal - Shampoo + Balm',
    price: 70.28,
    originalPrice: 79.90,
    rating: 4.8,
    reviews: 890,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_874079-MLA84472113893_052025-F.webp',
    badges: ['RECOMENDADO', 'MELHOR PREÇO'],
    externalLink: 'https://mercadolivre.com/sec/1GKCuLK'
  },
  {
    id: 'k14',
    name: 'Kit Especial para Barba Branca',
    price: 92.42,
    originalPrice: 112.10,
    rating: 5,
    reviews: 115,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_865092-MLA80926429688_122024-F.webp',
    badges: ['ANTI-AMARELADO', 'OFERTA'],
    externalLink: 'https://mercadolivre.com/sec/1jCYfm4'
  },
  {
    id: 'k15',
    name: 'Combo Pomadas - Brilho + Matte + Fibra',
    price: 127.16,
    originalPrice: 150.00,
    rating: 4.9,
    reviews: 760,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_784495-MLB74059209657_012024-F.webp',
    badges: ['ECONOMIA', 'MAIS VENDIDO'],
    externalLink: 'https://mercadolivre.com/sec/2oxJCyk'
  },
  {
    id: 'k16',
    name: 'Kit Para Barba 4por1 Blend Barba De Respeito E Pente',
    price: 249.90,
    originalPrice: 280.00,
    rating: 4.7,
    reviews: 240,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_743755-MLB84133012950_052025-F-kit-para-barba-4por1-blend-barba-de-respeito-e-pente.webp',
    badges: ['PREMIUM', 'COMPLETO'],
    externalLink: 'https://mercadolivre.com/sec/2U7f87f'
  },
  {
    id: 'k17',
    name: 'Combo Pós-Barba Refrescante Menta',
    price: 32.46,
    originalPrice: 65.90,
    rating: 4.8,
    reviews: 410,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_739828-MLA83248304138_042025-F.webp',
    badges: ['REFRIGERANTE', 'OFERTA'],
    externalLink: 'https://mercadolivre.com/sec/26VJzyB'
  },
  {
    id: 'k18',
    name: 'Kit Profissional Barber em Casa',
    price: 49.72,
    originalPrice: 89.90,
    rating: 5,
    reviews: 142,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_834969-MLB100460513524_122025-F-kit-aparador-de-pelos-barba-barbeador-2-em-1-kemei-e-estojo.webp',
    badges: ['PREFERIDO', 'EM OFERTA'],
    externalLink: 'https://mercadolivre.com/sec/2AWWPsq'
  },
  {
    id: 'k19',
    name: 'Homem De Poder Kit 6 Redensyl Para',
    price: 193.92,
    originalPrice: 249.90,
    rating: 5,
    reviews: 920,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_778227-MLB93283901771_092025-F.webp',
    badges: ['OFERTA IMPERDÍVEL', 'MELHOR CUSTO-BENEFÍCIO'],
    externalLink: 'https://amzn.to/4sBJRCp'
  },
  {
    id: 'k20',
    name: 'Kit Alinhamento de Fios Rebeldes',
    price: 53.95,
    originalPrice: 65.00,
    rating: 4.7,
    reviews: 310,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_695458-MLB75948874284_052024-F.webp',
    badges: ['RECOMENDADO', 'ALINHAMENTO'],
    externalLink: 'https://mercadolivre.com/sec/1PXRCym'
  },
  {
    id: 'k21',
    name: 'Kit Cuidado de Tatuagem e Barba',
    price: 53.76,
    originalPrice: 89.90,
    rating: 4.9,
    reviews: 180,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_820239-MLA80789386287_112024-F.webp',
    badges: ['NOVIDADE', 'RECOMENDADO'],
    externalLink: 'https://mercadolivre.com/sec/1Ck1mtE'
  },
  {
    id: 'k22',
    name: 'Combo Shampoo Bomba + Óleo Fortificante',
    price: 120.37,
    originalPrice: 159.90,
    rating: 4.8,
    reviews: 560,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_888926-MLA99144254298_112025-F.webp',
    badges: ['MAIS VENDIDO'],
    externalLink: 'https://mercadolivre.com/sec/1iKoWFz'
  },
  {
    id: 'k23',
    name: 'EUCERIN Creme Facial Antimanchas Noite 50ml, Anti-Pigment, Clareador, Thiamidol, Noturno',
    price: 200.25,
    originalPrice: 250.00,
    rating: 5,
    reviews: 412,
    image: 'https://m.media-amazon.com/images/I/61Wu7N7a5wL._AC_SL1500_.jpg',
    badges: ['OFERTA IMPERDÍVEL', 'RECOMENDADO'],
    externalLink: 'https://amzn.to/4pzgTAw'
  },
  {
    id: 'k24',
    name: 'Kit Trio Dinâmico - Limpa, Hidrata e Modela',
    price: 62.90,
    originalPrice: 111.97,
    rating: 4.9,
    reviews: 1230,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_606369-MLB71329385423_082023-F.webp',
    badges: ['RECOMENDADO', 'MAIS VENDIDO'],
    externalLink: 'https://mercadolivre.com/sec/263mB9i'
  },
  {
    id: 'k25',
    name: 'Combo Garibaldi Vikings - Barba Cheia & Cabelo (3 un)',
    price: 127.97,
    originalPrice: 169.90,
    rating: 5,
    reviews: 1520,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_957384-MLB92688078037_092025-F.webp',
    badges: ['RECOMENDADO', 'MELHOR AVALIADO'],
    externalLink: 'https://mercadolivre.com/sec/2qe2gHh'
  },
  {
    id: 'k26',
    name: 'Secador De Cabelos Profissional Cacho Leve 2400w',
    price: 122.15,
    originalPrice: 128.58,
    rating: 5,
    reviews: 124,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_943539-MLB96931074175_112025-F-secador-de-cabelos-profissional-cacho-leve-2400w-110-e-220v.webp',
    badges: ['PROFISSIONAL', '2400W'],
    externalLink: 'https://mercadolivre.com/sec/2KCnSK2'
  },
  {
    id: 'k27',
    name: 'Kit Bio-Tech Growth (Redensyl + Minoxidil)',
    price: 139.20,
    originalPrice: 160.00,
    rating: 5,
    reviews: 2150,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_984469-MLU75129939751_032024-F.webp',
    badges: ['CIÊNCIA PURA', 'CRESCIMENTO ACELERADO'],
    externalLink: 'https://mercadolivre.com/sec/1b8v5J2'
  },
  {
    id: 'k28',
    name: 'Pente Régua Modelador Alinhador - 5 Tamanhos',
    price: 36.15,
    originalPrice: 59.90,
    rating: 5,
    reviews: 560,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_609355-MLB89191924844_082025-F-pente-barba-regua-modelador-alinhador-molde-5-tamanhos.webp',
    badges: ['ALINHAMENTO', 'ESCOLHA DO BARBEIRO'],
    externalLink: 'https://produto.mercadolivre.com.br/MLB-3954001165-pente-barba-regua-modelador-alinhador-molde-5-tamanhos-_JM'
  }
];

const KitsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductAction = (product: Product) => {
    if (product.externalLink) {
      window.open(product.externalLink, '_blank');
    }
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Kits de Tratamento | Cavanhaque - Soluções Completas"
        description="Economize com nossos kits exclusivos de tratamento para barba e cabelo. Fator de crescimento, hidratação profunda e kits de presente premium."
        keywords="kits barba, kit minoxidil, tratamento crescimento barba, kit presente masculino, grooming combos"
        canonicalUrl="https://cavanhaque.com/kits"
      />

      {/* SEO PREMIUM HEADER WITH MOTION */}
      <header className="bg-brand-dark py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-black mb-4 block animate-reveal-up bg-zinc-900/30 inline-block px-3 py-1">
            O Presente Ideal para o Homem Moderno
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 opacity-0 animate-reveal-up delay-100">
            Kits de <span className="text-brand-gold italic text-shine">Tratamento</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-reveal-up delay-200">
            Economize até 40% com nossos combos exclusivos. Soluções completas para crescimento, hidratação e um barbear perfeito.
          </p>
        </div>
      </header>

      {/* TRUST & BENEFITS */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Zap className="text-brand-gold" size={24} />, text: "Resultados em 30 dias" },
              { icon: <Gift className="text-brand-gold" size={24} />, text: "Embalagem para Presente" },
              { icon: <ShieldCheck className="text-brand-gold" size={24} />, text: "Garantia de Satisfação" },
              { icon: <CheckCircle2 className="text-brand-gold" size={24} />, text: "Aprovado por Barbeiros" },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 group opacity-0 animate-reveal-up`} style={{ animationDelay: `${i * 100 + 300}ms` }}>
                <div className="p-3 bg-brand-light rounded-full group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID - FULLY RESTORED 28+ ITEMS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {kitsData.map((item, idx) => (
            <article key={item.id} className={`bg-white group relative shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col rounded-xl opacity-0 animate-reveal-up`} style={{ animationDelay: `${(idx % 8) * 50}ms` }}>
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <OptimizedImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={600}
                  height={600}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                  {item.badges && item.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="bg-brand-charcoal text-brand-gold text-[9px] font-black px-2 py-1 uppercase tracking-tighter border border-brand-gold/20 shadow-xl">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-brand-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleProductAction(item)}
                    className="bg-brand-gold text-brand-dark px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2 shadow-xl"
                  >
                    {item.externalLink ? (
                      <><ExternalLink size={14} /> Ver Oferta Oficial</>
                    ) : (
                      <><ShoppingCart size={14} /> Adicionar</>
                    )}
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className={i < Math.floor(item.rating) ? "fill-brand-gold text-brand-gold" : "text-gray-200"} />
                  ))}
                  <span className="text-[9px] text-gray-400 font-bold ml-1 uppercase">({item.reviews} Reviews)</span>
                </div>

                <h3 className="text-lg font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">
                  {item.name}
                </h3>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-[10px]">R$ {item.originalPrice.toFixed(2).replace('.', ',')}</span>
                    )}
                    <span className="text-xl font-black text-brand-dark">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="text-[10px] text-brand-gold font-bold">
                    OFERTA ATIVA
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-gold text-brand-dark text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-tight opacity-0 animate-reveal-up">
            Ritual <span className="italic">Completo</span>
          </h2>
          <p className="font-medium mb-10 text-lg opacity-0 animate-reveal-up delay-100">
            Escolha o kit que melhor se adapta ao seu estilo de vida.
          </p>
          <div className="flex justify-center opacity-0 animate-reveal-up delay-200">
            <Link to="/blog" className="bg-brand-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-2xl flex items-center gap-2">
              Dicas de Cuidado <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitsPage;
