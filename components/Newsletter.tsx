import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado! O e-mail ${email} foi cadastrado com sucesso.`);
    setEmail('');
  };

  return (
    <section className="bg-stone-300 py-20 relative overflow-hidden">
      {/* Texture overlay simulation */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.webp")' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-4">
          Entre pra Comunidade
        </h2>
        <p className="text-brand-charcoal/80 mb-8 max-w-lg mx-auto">
          Junte-se aos milhares de barbudos que recebem dicas exclusivas e descontos antecipados. 
          Ganhe <span className="font-bold text-brand-dark">10% OFF</span> na sua primeira compra.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
            className="flex-1 px-6 py-4 bg-white border border-transparent focus:border-brand-gold focus:outline-none text-brand-charcoal placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-brand-charcoal text-white font-bold uppercase tracking-wider hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
          >
            Assinar
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-4">
          Respeitamos sua caixa de entrada. Sem spam, apenas conteúdo de valor.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
