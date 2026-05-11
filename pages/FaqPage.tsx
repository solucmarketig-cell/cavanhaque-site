import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Package, Droplets, ShieldCheck, HelpCircle, MessageSquare, Truck, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface FaqItem {
  question: string;
  answer: string;
  category: 'logistica' | 'produtos' | 'estilo' | 'geral';
}

const faqs: FaqItem[] = [
  {
    category: 'logistica',
    question: "Qual o prazo de entrega dos produtos?",
    answer: "O prazo varia de acordo com a sua região, mas a média para capitais é de 3 a 7 dias úteis. Após a confirmação do pagamento, seu arsenal é despachado em até 24 horas úteis."
  },
  {
    category: 'logistica',
    question: "Como funciona o frete grátis?",
    answer: "Oferecemos frete grátis para todo o Brasil em compras acima de R$ 199,00. O envio é feito via modalidade econômica com rastreamento completo."
  },
  {
    category: 'produtos',
    question: "O Minoxidil realmente funciona na barba?",
    answer: "Sim, estudos clínicos comprovam que o Minoxidil estimula a vascularização do folículo piloso, 'acordando' pelos em fase de dormência. O uso contínuo por pelo menos 90 dias é recomendado para resultados expressivos."
  },
  {
    category: 'produtos',
    question: "Qual a diferença entre Balm e Óleo?",
    answer: "O óleo é focado na hidratação da pele e brilho dos fios. O balm é um condicionador sem enxágue que ajuda a modelar e alinhar fios rebeldes. Para barbas longas, o ideal é usar os dois juntos."
  },
  {
    category: 'estilo',
    question: "Como saber qual estilo de barba combina com meu rosto?",
    answer: "Temos um guia completo de Visagismo na nossa página de 'Estilos'. Em geral, rostos redondos pedem linhas mais angulares e cavanhaques pontudos, enquanto rostos quadrados ficam bem com barbas mais cheias nas laterais."
  },
  {
    category: 'produtos',
    question: "Os produtos são testados em animais?",
    answer: "De forma alguma. Todos os nossos produtos são Cruelty Free e priorizamos matérias-primas de origem vegetal e sustentável."
  },
  {
    category: 'geral',
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos Cartão de Crédito (em até 12x), PIX com 5% de desconto extra e Boleto Bancário."
  },
  {
    category: 'logistica',
    question: "Onde encontro meu código de rastreio?",
    answer: "O código é enviado automaticamente para o seu e-mail cadastrado assim que o produto é entregue à transportadora. Você também pode consultar na nossa página de 'Rastreamento'."
  }
];

const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: 'logistica', label: 'Pedidos e Entrega', icon: <Truck size={18} /> },
    { id: 'produtos', label: 'Produtos e Uso', icon: <Droplets size={18} /> },
    { id: 'estilo', label: 'Estilo e Visagismo', icon: <ShieldCheck size={18} /> },
    { id: 'geral', label: 'Dúvidas Gerais', icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="FAQ - Perguntas Frequentes | Cavanhaque"
        description="Tire suas dúvidas sobre pedidos, prazos de entrega, uso de produtos e estilos de barba. Central de ajuda completa do Cavanhaque."
        keywords="faq cavanhaque, dúvidas barba, suporte pedidos, ajuda logística"
        canonicalUrl="https://cavanhaque.com/faq"
      />

      {/* Header */}
      <header className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">
            Central de Ajuda
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Perguntas Frequentes</h1>
          <p className="text-gray-400 text-lg font-light max-xl mx-auto">
            Tudo o que você precisa saber sobre o universo Cavanhaque em um só lugar.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-10 pb-24 relative z-20">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Busque por 'entrega', 'minoxidil', 'pagamento'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-brand-light border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all rounded-xl font-medium text-brand-dark"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Categories - Desktop */}
          <div className="md:col-span-1 hidden md:block space-y-2">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Categorias</h3>
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSearchTerm(cat.id === 'geral' ? '' : cat.label.split(' ')[0])}
                className="w-full text-left p-3 rounded-lg text-xs font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-white hover:text-brand-gold transition-all text-brand-charcoal"
              >
                <span className="text-brand-gold">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="md:col-span-3 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-brand-dark text-sm md:text-base">{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-brand-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === idx ? 'max-h-96 py-5 border-t border-gray-50' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-200">
                <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">Não encontramos o que você procura.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-brand-gold font-bold text-xs uppercase mt-2 underline"
                >
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quick Links Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link to="/rastreamento" className="flex flex-col items-center text-center group">
            <div className="p-4 bg-brand-light rounded-2xl text-brand-dark group-hover:bg-brand-gold transition-colors mb-4">
              <Package size={24} />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Rastreamento</h4>
            <p className="text-[10px] text-gray-400">Siga seu pedido em tempo real</p>
          </Link>
          <Link to="/trocas-e-devolucoes" className="flex flex-col items-center text-center group">
            <div className="p-4 bg-brand-light rounded-2xl text-brand-dark group-hover:bg-brand-gold transition-colors mb-4">
              <RefreshCcw size={24} />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Trocas</h4>
            <p className="text-[10px] text-gray-400">Política de satisfação garantida</p>
          </Link>
          <Link to="/manifesto" className="flex flex-col items-center text-center group">
            <div className="p-4 bg-brand-light rounded-2xl text-brand-dark group-hover:bg-brand-gold transition-colors mb-4">
              <MessageSquare size={24} />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Manifesto</h4>
            <p className="text-[10px] text-gray-400">Conheça nossos princípios</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;