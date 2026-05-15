import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import ProductGrid from '../components/ProductGrid';
import LimitedOffer from '../components/LimitedOffer';
import BlogList from '../components/BlogList';
import Newsletter from '../components/Newsletter';
import AdUnit from '../components/AdUnit';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Cavanhaque | Blog de Estilo Masculino, Barba e Cuidados Premium"
        description="O guia definitivo do homem moderno. Aprenda tudo sobre Minoxidil para barba, como preencher falhas, estilos de cavanhaque e visagismo. O melhor blog de grooming do Brasil."
        keywords="cavanhaque, barba, minoxidil, preencher falhas barba, visagismo masculino, estilo masculino, cuidados com a barba, grooming"
        canonicalUrl="https://cavanhaque.com/"
      />
      <Hero />

      {/* Social Proof: Builds trust immediately after first impression */}
      <SocialProof />

      <Features />

      {/* Sales Page Element: Products (Interest/Desire) */}
      <AdUnit type="display" className="max-w-7xl mx-auto px-4" />
      <ProductGrid />

      {/* Scarcity Block: Pushes for conversion for those who haven't bought yet */}
      <LimitedOffer />

      {/* SEO/Content Element: Blog (Interest/Education) */}
      <AdUnit type="display" className="max-w-7xl mx-auto px-4" />
      <BlogList />

      {/* Conversion Element: Newsletter (Action) */}
      <Newsletter />
    </>
  );
};

export default HomePage;
