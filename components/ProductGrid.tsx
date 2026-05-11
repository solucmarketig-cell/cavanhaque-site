
import React, { useEffect, useState } from 'react';
import { Star, ShoppingCart, ExternalLink, Zap, ShieldCheck } from 'lucide-react';
import { fetchProducts } from '../services/contentService';
import { Product } from '../types';
import OptimizedImage from './OptimizedImage';

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleBuyClick = (product: Product) => {
    if (product.externalLink) {
      window.open(product.externalLink, '_blank');
    }
  };

  return (
    <section id="loja" className="py-24 bg-brand-light" aria-labelledby="store-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20 opacity-0 animate-reveal-up">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">
            Arsenal Recomendado
          </span>
          <h2 id="store-heading" className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Ferramentas do <span className="text-brand-gold italic">Homem Moderno</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Selecionamos as melhores ferramentas do mercado para barba e cabelo. Produtos testados para resultados reais de preenchimento e hidratação.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <article
              key={product.id}
              className="bg-white group cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden flex flex-col border border-gray-100 opacity-0 animate-reveal-up"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => handleBuyClick(product)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {product.badges?.map((badge, bIdx) => (
                  <span key={bIdx} className="bg-brand-dark text-brand-gold text-[8px] font-black px-3 py-1.5 uppercase tracking-widest shadow-xl flex items-center gap-1.5 border border-brand-gold/20">
                    <Zap size={10} className="animate-pulse" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-50">
                <OptimizedImage
                  src={product.image}
                  alt={`Imagem do produto: ${product.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  width={400}
                  height={500}
                />

                {/* Visual Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* CTA Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white text-brand-dark px-8 py-4 font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 shadow-2xl">
                    <ExternalLink size={16} /> Ver no Mercado Livre
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-1 bg-white relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(product.rating) ? "fill-brand-gold text-brand-gold" : "text-gray-200"}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="text-[9px] font-black text-gray-400 ml-2 uppercase tracking-tighter">
                    {product.reviews} avaliações
                  </span>
                </div>

                <h3 className="text-brand-dark font-bold text-lg leading-tight mb-4 group-hover:text-brand-gold transition-colors line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-end justify-between">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-gray-400 text-[10px] line-through mb-1">
                        De: R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    <span className="text-brand-dark font-black text-2xl tracking-tighter">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black text-green-600 uppercase tracking-widest flex items-center gap-1 mb-1">
                      <ShieldCheck size={10} /> Link Seguro
                    </span>
                    <div className="text-[9px] font-black text-brand-gold bg-brand-dark px-2 py-1 rounded">
                      ML OFICIAL
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center opacity-0 animate-reveal-up delay-300">
          <a
            href="https://mercadolivre.com/sec/1exasrj"
            target="_blank"
            rel="noopener"
            className="inline-block border-b-2 border-brand-dark text-brand-dark font-black uppercase tracking-[0.3em] text-xs pb-2 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
          >
            Ver todos os combos exclusivos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
