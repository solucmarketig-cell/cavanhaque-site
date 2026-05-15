import React, { useState, useEffect } from 'react';
import { Mail, Clock, MessageSquare, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Fale Conosco | Cavanhaque - Suporte e Atendimento"
        description="Entre em contato com a equipe Cavanhaque. Suporte especializado para dúvidas sobre produtos, pedidos e parcerias. Atendimento ágil."
        canonicalUrl="https://cavanhaque.com/fale-conosco"
      />
      {/* Header */}
      <header className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.webp')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">
            Suporte Especializado
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Fale Conosco</h1>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            Tem alguma dúvida sobre nossos conteúdos ou produtos? Nossa equipe de especialistas está pronta para ajudar.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-10 pb-24 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Info Side */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-brand-dark p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-xl font-serif font-bold text-brand-gold mb-6">Atendimento Oficial</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-gold h-fit">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">Horário</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Segunda a Sexta<br />09:00 às 18:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-gold h-fit">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">Prazo de Resposta</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Até 48 horas úteis para solicitações via formulário.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-gold h-fit">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">E-mail Direto</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">contato@cavanhaque.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-brand-dark font-bold text-sm uppercase mb-4 tracking-wider">Sede e Transparência</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                <strong>Cavanhaque Digital Content</strong><br />
                São Paulo, SP - Brasil<br />
                Portal de conteúdo especializado em grooming e estilo masculino.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
                 <ShieldCheck size={16} className="text-green-500" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Site Seguro & Verificado</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-50 h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Mensagem Recebida!</h2>
                  <p className="text-gray-500 max-w-sm mx-auto mb-8">
                    Obrigado por entrar em contato. Nossa equipe já foi notificada e retornaremos em breve no seu e-mail.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-gold font-bold uppercase text-xs tracking-widest underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-bold text-brand-dark mb-8">Envie sua Mensagem</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Seu Nome</label>
                        <input
                          required
                          type="text"
                          placeholder="Ex: Carlos Silva"
                          className="w-full px-5 py-4 bg-brand-light border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all rounded-xl font-medium text-brand-dark"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">E-mail de Contato</label>
                        <input
                          required
                          type="email"
                          placeholder="email@exemplo.com"
                          className="w-full px-5 py-4 bg-brand-light border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all rounded-xl font-medium text-brand-dark"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Assunto</label>
                      <select
                        required
                        className="w-full px-5 py-4 bg-brand-light border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all rounded-xl font-medium text-brand-dark appearance-none"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Dúvida sobre Produto">Dúvida sobre Produto</option>
                        <option value="Sugestão de Artigo">Sugestão de Artigo</option>
                        <option value="Problema com Pedido">Problema com Pedido</option>
                        <option value="Parceria">Parceria / Comercial</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Sua Mensagem</label>
                      <textarea
                        required
                        rows={6}
                        placeholder="Como podemos ajudar você hoje?"
                        className="w-full px-5 py-4 bg-brand-light border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all rounded-xl font-medium text-brand-dark resize-none"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-dark text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-dark transition-all shadow-lg flex items-center justify-center gap-3 group"
                    >
                      Enviar Solicitação
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
