import React, { useEffect } from 'react';
import { Star, ShoppingCart, ShieldCheck, PenTool as Tool, Award, Package, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';


const accessoriesData: Product[] = [
  {
    id: 'a1',
    name: 'Pente de Madeira Anti-Estática',
    price: 19.00,
    originalPrice: 29.90,
    rating: 5,
    reviews: 450,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_997280-MLU78068082383_072024-F.webp',
    badges: ['ESSENCIAL'],
    externalLink: 'https://meli.la/13VWbho'
  },
  {
    id: 'a2',
    name: 'Escova de Cerdas de Javali',
    price: 53.10,
    originalPrice: 59.00,
    rating: 4.9,
    reviews: 180,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_641767-MLB88824312008_082025-F-escova-cabelo-barba-cerdas-naturais-macias-javali-anti-frizz.webp',
    badges: ['PREMIUM', 'OFERTA'],
    externalLink: 'https://meli.la/13m1pCp'
  },
  {
    id: 'a3',
    name: 'Necessaire de Couro Legítimo',
    price: 149.91,
    originalPrice: 176.36,
    rating: 5,
    reviews: 75,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_617702-MLB84720429514_052025-F-necessaire-masculina-bolsa-porta-objeto-viagem-couro-grande.webp',
    badges: ['LUXO', 'MAIS VENDIDO'],
    externalLink: 'https://meli.la/1pYZxVQ'
  },
  {
    id: 'a4',
    name: 'Aparelho de Barbear Clássico (Safety Razor)',
    price: 96.67,
    originalPrice: 119.90,
    rating: 4.8,
    reviews: 230,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_658702-MLB76452930004_052024-F-barbeador-borda-dupla-safety-qshave-5-lminas-classico.webp',
    badges: ['VINTAGE', 'PREFERIDO'],
    externalLink: 'https://meli.la/1TffqFZ'
  },
  {
    id: 'a5',
    name: 'Tesoura Profissional para Bigode',
    price: 30.99,
    originalPrice: 78.99,
    rating: 4.7,
    reviews: 95,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_827373-MLB96395710945_102025-F-tesoura-de-cabelo-profissional-para-cortar-barba-preciso.webp',
    badges: ['PRECISÃO', 'OFERTA'],
    externalLink: 'https://produto.mercadolivre.com.br/MLB-3908174291-tesoura-profissional-cabeleireiro-barbeiro-fio-navalha-kit-_JM'
  },
  {
    id: 'a6',
    name: 'Kit de Viagem Compacto',
    price: 141.90,
    originalPrice: 159.00,
    rating: 4.9,
    reviews: 112,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_811963-MLB99639658847_112025-F.webp',
    badges: ['PRATICIDADE'],
    externalLink: 'https://meli.la/2YG7zcK'
  }
];

const AccessoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductAction = (product: Product) => {
    if (product.externalLink) {
      window.open(product.externalLink, '_blank');
    } else {
      console.log('Adicionado ao carrinho:', product.name);
    }
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Acessórios Premium | Cavanhaque - Ferramentas de Precisão"
        description="Descubra nossa seleção de acessórios premium para barba e cabelo. Pentes de madeira, escovas de cerdas de javali e ferramentas de precisão."
        keywords="acessórios barba, pente de madeira, escova barba javali, grooming masculino, ferramentas barbearia"
        canonicalUrl="https://cavanhaque.com/acessorios"
      />

      {/* Premium Header */}
      <header className="bg-brand-dark py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.webp')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-black mb-4 block animate-pulse">
            Ferramentas de Precisão
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">
            Acessórios <span className="text-brand-gold italic">Premium</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            O arsenal completo para o homem exigente. Ferramentas duráveis, funcionais e com design impecável para o seu ritual diário.
          </p>
        </div>
      </header>

      {/* Trust Badges */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <ShieldCheck className="text-brand-gold" size={20} />, text: "Materiais Nobres" },
              { icon: <Award className="text-brand-gold" size={20} />, text: "Garantia Vitalícia" },
              { icon: <Tool className="text-brand-gold" size={20} />, text: "Design Ergonômico" },
              { icon: <Package className="text-brand-gold" size={20} />, text: "Pronta Entrega" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {accessoriesData.map((item) => (
            <article key={item.id} className="bg-white group relative shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 rounded-2xl flex flex-col h-full">
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <OptimizedImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={600}
                  height={600}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {item.badges && item.badges.map((badge, idx) => (
                    <span key={idx} className="bg-brand-charcoal text-brand-gold text-[9px] font-black px-2 py-1 uppercase tracking-tighter border border-brand-gold/20 shadow-xl">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleProductAction(item)}
                    className="bg-brand-gold text-brand-dark px-8 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-colors flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    {item.externalLink ? (
                      <><ExternalLink size={14} /> Recomendado</>
                    ) : (
                      <><ShoppingCart size={14} /> Comprar Agora</>
                    )}
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 text-center flex flex-col flex-1">
                <div className="flex justify-center items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className={i < Math.floor(item.rating) ? "fill-brand-gold text-brand-gold" : "text-gray-200"} />
                  ))}
                  <span className="text-[9px] text-gray-400 font-bold ml-1 tracking-tighter uppercase">({item.reviews} AVALIAÇÕES)</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">
                  {item.name}
                </h3>

                <div className="mt-auto flex items-center justify-center gap-3">
                  <div className="flex flex-col items-center">
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-[10px]">
                        R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    <span className="text-2xl font-black text-brand-dark">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {item.externalLink && (
                  <div className="mt-4 text-[9px] font-black text-brand-gold uppercase tracking-[0.2em] animate-pulse">
                    {item.externalLink.includes('amzn.to') || item.externalLink.includes('amazon')
                      ? 'Oferta Exclusiva Amazon'
                      : 'Oferta Exclusiva Mercado Livre'}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEO Section / Education */}
      <section className="bg-brand-charcoal py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">Por que investir em ferramentas de qualidade?</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">Pentes de Madeira vs Plástico</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                Diferente do plástico, a madeira não gera eletricidade estática. Isso significa zero <strong>frizz</strong> e fios muito mais alinhados. Além disso, a madeira absorve levemente os óleos naturais da pele e os óleos de barba que você aplica, ajudando na distribuição uniforme por todo o fio.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">O Poder das Cerdas de Javali</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                Uma escova de cerdas naturais é o segredo para uma barba densa e limpa. Elas massageiam o folículo piloso, estimulando a circulação sanguínea e o crescimento capilar, enquanto removem suavemente impurezas e pele morta que o shampoo comum pode não alcançar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-4 uppercase tracking-tight">Complete seu Arsenal</h2>
          <p className="font-medium mb-10 text-lg">Qualidade garantida em cada detalhe do seu grooming.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl">
              Explorar Promoções
            </button>
            <Link to="/kits" className="bg-white text-brand-dark px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-2xl">
              Ver Kits de Tratamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;
