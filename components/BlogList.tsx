
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import { fetchArticles } from '../services/contentService';
import { Article } from '../types';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const BlogList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then(data => setArticles(data.slice(0, 3)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="py-20 bg-brand-charcoal text-brand-light" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <header className="opacity-0 animate-reveal-up">
            <span className="text-brand-gold uppercase tracking-widest text-sm font-bold">Conteúdo Exclusivo</span>
            <h2 id="blog-heading" className="text-3xl md:text-5xl font-serif font-bold mt-2 text-white">Manual do Homem</h2>
          </header>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors mt-4 md:mt-0 group opacity-0 animate-reveal-up" aria-label="Ver todos os artigos do blog">
            Ver todos os artigos <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-white/5 h-96 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <article
                key={article.id}
                className={`opacity-0 animate-reveal-up`}
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group cursor-pointer flex flex-col h-full bg-brand-dark border border-white/5 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/5"
                >
                  <div className="relative overflow-hidden h-60">
                    <OptimizedImage
                      src={article.imageUrl}
                      alt={`Capa do artigo: ${article.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      width={600}
                      height={400}
                    />
                    <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                      <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-gold transition-colors text-white leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1 font-light">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto">
                      <span className="text-brand-gold text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        Ler Artigo <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
