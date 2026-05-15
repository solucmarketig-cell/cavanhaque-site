import React, { useEffect } from 'react';
import { Scale, FileCheck, AlertCircle, Copyright, ExternalLink, RefreshCcw } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfUsePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <FileCheck className="text-brand-gold" size={24} />,
      title: "1. Aceitação dos Termos",
      content: "Ao acessar e utilizar o site Cavanhaque, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços."
    },
    {
      icon: <Copyright className="text-brand-gold" size={24} />,
      title: "2. Propriedade Intelectual",
      content: "Todo o conteúdo publicado neste blog, incluindo textos, imagens, logotipos e design, é de propriedade exclusiva do Cavanhaque ou de seus licenciadores e está protegido por leis de direitos autorais. A reprodução total ou parcial sem autorização prévia por escrito é estritamente proibida."
    },
    {
      icon: <Scale className="text-brand-gold" size={24} />,
      title: "3. Uso de Conteúdo Informativo",
      content: "O conteúdo fornecido no Cavanhaque tem fins puramente informativos e educacionais sobre estética e grooming masculino. Embora busquemos a precisão, as dicas e guias não substituem o aconselhamento profissional médico ou dermatológico. O uso de qualquer informação do site é por sua conta e risco."
    },
    {
      icon: <ExternalLink className="text-brand-gold" size={24} />,
      title: "4. Links de Afiliados e Terceiros",
      content: "Nosso site contém links para sites de terceiros (como o Mercado Livre). Não temos controle sobre o conteúdo ou práticas de privacidade desses sites. Ao clicar em um link de afiliado, você reconhece que o Cavanhaque pode receber uma comissão por compras qualificadas, sem custo adicional para você."
    },
    {
      icon: <AlertCircle className="text-brand-gold" size={24} />,
      title: "5. Limitação de Responsabilidade",
      content: "O Cavanhaque não será responsável por quaisquer danos diretos, indiretos ou consequentes resultantes do uso ou da incapacidade de usar este site, ou de qualquer erro ou omissão no conteúdo publicado."
    },
    {
      icon: <RefreshCcw className="text-brand-gold" size={24} />,
      title: "6. Alterações nos Termos",
      content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos Termos de Uso."
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Termos de Uso | Cavanhaque"
        description="Leia nossos termos de uso. Regras claras sobre propriedade intelectual, uso do site e responsabilidades. Navegação segura e transparente."
        canonicalUrl="https://cavanhaque.com/termos-de-uso"
      />
      {/* Header Premium */}
      <header className="bg-brand-dark py-20 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Termos de Uso</h1>
          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs font-black">
            Vigência a partir de 24 de Dezembro de 2025
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-600 leading-relaxed mb-12 text-lg">
            Bem-vindo ao <strong>Cavanhaque</strong>. Estes termos regem o seu acesso ao nosso site e definem as regras para garantir que nossa comunidade de barbudos e entusiastas do estilo masculino tenha uma experiência segura e de alta qualidade.
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="flex flex-col md:flex-row gap-6 group">
                <div className="shrink-0 p-3 bg-brand-light rounded-xl h-fit group-hover:bg-brand-gold transition-colors duration-300">
                  <div className="group-hover:text-brand-dark transition-colors duration-300">
                    {section.icon}
                  </div>
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

          {/* Seção Final Jurídica */}
          <div className="mt-16 pt-12 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm italic mb-0">
              Estes termos são regidos pelas leis da República Federativa do Brasil. Para dúvidas ou sugestões, entre em contato com nosso suporte jurídico.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUsePage;
