import React, { useState, useEffect } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, AlertCircle, ExternalLink, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

const TrackingPage: React.FC = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode) return;
    
    setIsSearching(true);
    // Simulando uma busca na API
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  const steps = [
    { status: 'Pedido Realizado', date: '22/12/2025 - 10:30', completed: true, current: false },
    { status: 'Pagamento Confirmado', date: '22/12/2025 - 10:35', completed: true, current: false },
    { status: 'Em Processamento', date: '23/12/2025 - 09:15', completed: true, current: false },
    { status: 'Enviado para Transportadora', date: '23/12/2025 - 14:40', completed: true, current: true },
    { status: 'Saiu para Entrega', date: '--', completed: false, current: false },
    { status: 'Entregue', date: '--', completed: false, current: false },
  ];

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Rastrear Pedido | Cavanhaque - Acompanhe sua Entrega"
        description="Acompanhe o status da entrega do seu pedido no Cavanhaque. Insira seu código de rastreio e saiba onde está seu arsenal de grooming."
        keywords="rastreamento pedido, onde está meu pedido, logistica cavanhaque"
        canonicalUrl="https://cavanhaque.com/rastreamento"
      />

      {/* Header */}
      <header className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.webp')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">
            Logística e Entrega
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Rastrear Pedido</h1>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            Acompanhe cada passo do seu arsenal de grooming até a sua porta.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-10 pb-24 relative z-20">
        {/* Search Box */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <label className="block text-brand-charcoal text-xs font-black uppercase tracking-widest mb-4 text-center">
              Digite seu Código de Rastreio ou CPF
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  placeholder="Ex: CAV-12345678"
                  className="w-full pl-12 pr-4 py-4 bg-brand-light border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all rounded-xl font-bold text-brand-dark"
                />
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="bg-brand-dark text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-dark transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : 'Rastrear'}
              </button>
            </div>
            <p className="text-center text-gray-400 text-[10px] mt-6 uppercase tracking-tighter">
              Dica: Você recebeu este código por e-mail no momento do despacho.
            </p>
          </form>
        </div>

        {/* Result Area */}
        {showResult && (
          <div className="animate-fade-in">
            {/* Status Card */}
            <div className="bg-brand-charcoal text-white rounded-2xl p-8 mb-8 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-brand-gold/10 rounded-2xl border border-brand-gold/20">
                  <Truck className="text-brand-gold" size={32} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-brand-gold tracking-[0.2em]">Status Atual</span>
                  <h2 className="text-2xl font-serif font-bold">Em Trânsito</h2>
                </div>
              </div>
              <div className="text-center md:text-right">
                <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">Previsão de Entrega</span>
                <p className="text-xl font-bold">26 de Dezembro</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                      step.completed ? 'bg-brand-gold' : 'bg-gray-100'
                    }`}>
                      {step.completed ? <CheckCircle size={14} className="text-brand-dark" /> : <Clock size={12} className="text-gray-400" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <h4 className={`font-bold uppercase tracking-tight ${step.completed ? 'text-brand-dark' : 'text-gray-400'}`}>
                          {step.status}
                          {step.current && <span className="ml-3 px-2 py-0.5 bg-brand-gold/20 text-brand-gold text-[8px] rounded">ATUAL</span>}
                        </h4>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">{step.date}</span>
                      </div>
                      {step.current && (
                        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                          <MapPin size={12} className="text-brand-gold" /> Objeto em trânsito entre Unidade de Tratamento em Cajamar/SP para São Paulo/SP.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 flex items-center gap-2">
              <AlertCircle className="text-brand-gold" size={20} /> Problemas com a entrega?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Se o seu código não está funcionando ou se houve algum atraso imprevisto, nossa equipe está pronta para intervir junto à transportadora.
            </p>
            <button className="w-full py-4 bg-brand-light text-brand-dark font-black uppercase text-[10px] tracking-widest hover:bg-brand-dark hover:text-white transition-all rounded-xl flex items-center justify-center gap-2">
              <MessageSquare size={16} /> Abrir Chamado de Suporte
            </button>
          </div>

          <div className="bg-brand-dark p-8 rounded-2xl text-white shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-serif font-bold mb-4">Parceiros de Logística</h3>
            <p className="text-gray-400 text-sm mb-6">Você também pode rastrear diretamente nos sites oficiais dos nossos parceiros.</p>
            <div className="space-y-3">
              <a href="https://rastreamento.correios.com.br" target="_blank" className="flex items-center justify-between text-xs font-bold text-brand-gold hover:text-white transition-colors">
                Correios <ExternalLink size={14} />
              </a>
              <a href="https://www.mercadolivre.com.br/ajuda" target="_blank" className="flex items-center justify-between text-xs font-bold text-brand-gold hover:text-white transition-colors">
                Mercado Livre Envios <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackingPage;
