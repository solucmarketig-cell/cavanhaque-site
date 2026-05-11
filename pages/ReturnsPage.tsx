import React, { useEffect } from 'react';
import { RefreshCw, CheckCircle, Clock, Truck, FileText, AlertTriangle, ArrowRight, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const ReturnsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FileText size={24} />,
      title: "Solicitação",
      desc: "Envie um e-mail para trocas@cavanhaque.com com o número do pedido e motivo."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Análise",
      desc: "Nossa equipe responderá em até 48h úteis com as instruções de postagem."
    },
    {
      icon: <Truck size={24} />,
      title: "Envio",
      desc: "Leve o produto até uma agência dos Correios com o código de logística reversa."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Resolução",
      desc: "Após o recebimento, enviamos o novo produto ou processamos o reembolso em 5 dias."
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Trocas e Devoluções | Cavanhaque - Política de Garantia"
        description="Entenda nossa política de trocas e devoluções. Satisfação garantida ou seu dinheiro de volta em até 7 dias. Processo simples e transparente."
        canonicalUrl="https://cavanhaque.com/trocas-e-devolucoes"
      />
      {/* Header */}
      <header className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">
            Satisfação Garantida
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Trocas e Devoluções</h1>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            Nossa política é simples: se você não estiver satisfeito com seu arsenal de cuidado, nós resolvemos.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 -mt-10 pb-24 relative z-20">
        {/* Quick Process Timeline */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 mb-12">
          <h2 className="text-center text-xs font-black uppercase tracking-widest text-brand-gold mb-12">
            Como funciona o processo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-brand-light text-brand-dark rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-gold transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="font-bold text-brand-dark mb-2 uppercase text-sm tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Policies */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Policy Item 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Direito de Arrependimento</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Conforme o Art. 49 do Código de Defesa do Consumidor, você tem até <strong>7 dias corridos</strong> após o recebimento para desistir da compra e solicitar o reembolso total.
            </p>
            <ul className="space-y-2 text-xs text-gray-500 italic">
              <li>• O produto não deve apresentar sinais de uso.</li>
              <li>• Deve ser devolvido na embalagem original.</li>
              <li>• Lacres de segurança devem estar intactos.</li>
            </ul>
          </div>

          {/* Policy Item 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark">Produtos com Defeito</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Se o seu produto apresentar qualquer defeito de fabricação ou vazamento no transporte, você tem até <strong>30 dias</strong> para solicitar a troca por um novo item.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Neste caso, todos os custos de frete são por nossa conta. O novo envio será feito via SEDEX para que você não fique sem seus produtos.
            </p>
          </div>
        </div>

        {/* Refund Methods */}
        <section className="mt-12 bg-brand-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">Formas de Estorno</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Após a aprovação da devolução, o reembolso será processado de acordo com o método de pagamento original.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="border-l border-white/10 pl-6">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-3">Cartão de Crédito</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  O estorno poderá ocorrer em até 2 faturas subsequentes, dependendo da administradora do seu cartão.
                </p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-3">PIX ou Boleto</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  O valor será depositado em sua conta bancária em até 5 dias úteis após a análise do produto.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReturnsPage;