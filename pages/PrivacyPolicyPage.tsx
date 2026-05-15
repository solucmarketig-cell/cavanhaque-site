import React, { useEffect } from 'react';
import { Shield, Lock, Eye, Globe, Mail, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Eye className="text-brand-gold" size={24} />,
      title: "1. Coleta de Informações",
      content: "Na Cavanhaque.com, tratamos sua privacidade com a mesma seriedade que tratamos o grooming. Coletamos informações que você fornece voluntariamente, como nome e e-mail no nosso formulário de contato. Também monitoramos dados de navegação anonimizados para entender quais guias de estilo são mais úteis para nossa comunidade."
    },
    {
      icon: <Globe className="text-brand-gold" size={24} />,
      title: "2. Cookies e Publicidade (Google AdSense)",
      content: "Utilizamos cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. O Google, como fornecedor terceiro, utiliza cookies para exibir anúncios em nosso site. O uso do cookie DART pelo Google permite que ele veicule anúncios para nossos usuários com base em sua visita ao nosso site e a outros sites na Internet. Você pode desativar o uso do cookie DART e gerenciar suas preferências de cookies nas configurações do seu navegador ou acessando a Política de Privacidade da rede de conteúdo e anúncios do Google. Também trabalhamos com parceiros de análise como Google Analytics para entender o comportamento de navegação."
    },
    {
      icon: <Lock className="text-brand-gold" size={24} />,
      title: "3. Uso dos Dados e Segurança",
      content: "Os dados coletados na Cavanhaque.com servem exclusivamente para: aprimorar o conteúdo do nosso manual, responder suas dúvidas de estilo e garantir que você receba as melhores recomendações. Nós utilizamos protocolos de segurança modernos (SSL) para proteger qualquer informação transmitida. Nós nunca vendemos ou compartilhamos seus dados com terceiros para fins comerciais de terceiros."
    },
    {
      icon: <Shield className="text-brand-gold" size={24} />,
      title: "4. Transparência de Afiliados e Links Externos",
      content: "O site Cavanhaque participa de programas de marketing de afiliados (como o Mercado Livre, Amazon e outros). Isso significa que, ao clicar em links para produtos e realizar uma compra, podemos receber uma pequena comissão. Isso NÃO altera o preço para você. Nossa curadoria é independente: recomendamos apenas produtos que testamos ou que possuem excelente reputação técnica. Não nos responsabilizamos pelo conteúdo ou práticas de sites externos vinculados."
    },
    {
      icon: <FileText className="text-brand-gold" size={24} />,
      title: "5. Seus Direitos (LGPD)",
      content: "De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para exercer esses direitos, basta entrar em contato através do nosso e-mail oficial."
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Política de Privacidade | Cavanhaque"
        description="Saiba como protegemos seus dados. Política de privacidade transparente e em conformidade com a LGPD. Segurança e confiança em primeiro lugar."
        canonicalUrl="https://cavanhaque.com/politica-de-privacidade"
      />
      {/* Header Minimalista */}
      <header className="bg-brand-dark py-20 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Política de Privacidade</h1>
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-black">
            Atualizado em 24 de Dezembro de 2025
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-600 leading-relaxed mb-12 text-lg italic">
            Sua privacidade é fundamental para nós. Esta política detalha como tratamos suas informações e garante que sua navegação no site Cavanhaque seja segura, transparente e confiável.
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 p-3 bg-brand-light rounded-xl h-fit">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-3 uppercase tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}
          </div>

          {/* Rodapé Interno da Página */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
              <Mail className="text-brand-gold" size={20} /> Ficou com alguma dúvida?
            </h3>
            <p className="text-gray-600 mb-6">
              Se você tiver perguntas sobre esta política ou sobre o tratamento de seus dados, sinta-se à vontade para nos escrever.
            </p>
            <a
              href="mailto:privacidade@cavanhaque.com"
              className="inline-block bg-brand-dark text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-dark transition-all"
            >
              Falar com o DPO
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
