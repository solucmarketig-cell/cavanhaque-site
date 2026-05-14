import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, User, Search, Filter } from 'lucide-react';
import { fetchArticles } from '../services/contentService';
import { Article } from '../types';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import AdUnit from '../components/AdUnit';

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Cabelo', 'Dicas', 'Estilo', 'Tendências', 'Reviews', 'Ciência', 'Cultura'];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    fetchArticles()
      .then((data) => {
        setArticles(data);
        setFilteredArticles(data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = articles;

    if (selectedCategory !== 'Todos') {
      result = result.filter(a => a.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter(a =>
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredArticles(result);
  }, [searchTerm, selectedCategory, articles]);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO
        title="Blog Cavanhaque | Guia Completo de Grooming e Estilo Masculino"
        description="Tudo o que você precisa saber sobre cuidados com a barba, tendências de estilo e ciência por trás dos produtos. Artigos, dicas e reviews especializados."
        keywords="blog barba, dicas grooming, minoxidil barba, estilo masculino, cuidados barba, produtos barba"
        canonicalUrl="https://cavanhaque.com/blog"
        breadcrumbs={[
          { name: 'Home', url: 'https://cavanhaque.com/' },
          { name: 'Blog', url: 'https://cavanhaque.com/blog' }
        ]}
      />
      {/* Blog Header */}
      <div className="bg-brand-charcoal text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block animate-fade-in-up">
            Conhecimento é Poder
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Manual do Homem
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Tudo o que você precisa saber sobre cuidados com a barba, tendências de estilo e ciência por trás dos produtos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Controls */}
        <div className="bg-white p-6 rounded shadow-lg flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-bold uppercase rounded transition-colors ${selectedCategory === cat ? 'bg-brand-charcoal text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto min-w-[300px]">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-brand-gold"
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Ad Banner */}
        <AdUnit type="display" className="mt-8 mb-16" />

        {/* Featured Articles */}
        {!loading && filteredArticles.length > 0 && selectedCategory === 'Todos' && !searchTerm && (
          <div className="mb-20">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-8 flex items-center gap-3">
              <span className="w-10 h-1px bg-brand-gold"></span> Artigos em Destaque
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured */}
              <Link to={`/blog/${articles[0].slug}`} className="relative group overflow-hidden rounded-3xl h-[500px] shadow-2xl">
                <img src={articles[0].imageUrl} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <span className="bg-brand-gold text-brand-dark text-[10px] font-black px-3 py-1 rounded uppercase mb-4 inline-block">{articles[0].category}</span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">{articles[0].title}</h3>
                  <p className="text-gray-300 line-clamp-2 text-sm max-w-xl">{articles[0].excerpt}</p>
                </div>
              </Link>
              
              {/* Secondary Featured + Ad */}
              <div className="flex flex-col gap-8">
                <Link to={`/blog/${articles[1].slug}`} className="relative group overflow-hidden rounded-3xl h-[235px] shadow-xl">
                  <img src={articles[1].imageUrl} alt={articles[1].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="bg-brand-gold text-brand-dark text-[10px] font-black px-2 py-0.5 rounded uppercase mb-2 inline-block">{articles[1].category}</span>
                    <h3 className="text-xl font-bold leading-tight">{articles[1].title}</h3>
                  </div>
                </Link>
                <div className="bg-white rounded-3xl h-[235px] shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                   <AdUnit type="display" className="my-0 border-none shadow-none" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="py-16">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="animate-pulse bg-white h-96 rounded-lg shadow-sm"></div>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link to={`/blog/${article.slug}`} key={article.id} className="bg-white group cursor-pointer flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300 rounded overflow-hidden">
                  <div className="relative h-60 overflow-hidden">
                    <OptimizedImage
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-xs font-bold px-2 py-1 uppercase">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                      <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-brand-charcoal group-hover:text-brand-gold transition-colors leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto border-t border-gray-100 pt-4">
                      <span className="text-brand-charcoal font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                        Ler Completo <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <Filter size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-lg">Nenhum artigo encontrado para sua busca.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('Todos') }}
                className="mt-4 text-brand-gold font-bold underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>

        {/* Pagination Dummy */}
        {!loading && filteredArticles.length > 0 && (
          <div className="text-center pb-20">
            <button className="bg-white border border-gray-300 text-gray-600 px-8 py-3 font-bold uppercase text-sm tracking-wider hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-colors">
              Carregar Mais
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;