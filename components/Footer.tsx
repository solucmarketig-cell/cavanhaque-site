import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-serif font-bold text-2xl mb-6">
              C
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cavanhaque. A marca do homem moderno que não abre mão do estilo e do cuidado pessoal. Produtos premium e conteúdo de verdade.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/cavanhaque" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Visitar nosso Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/cavanhaque" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Visitar nosso Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/cavanhaque" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Visitar nosso Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-6 text-sm">Institucional</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/quem-somos" className="hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link to="/manifesto" className="hover:text-white transition-colors">Nosso Manifesto</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-6 text-sm">Ajuda</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/rastreamento" className="hover:text-white transition-colors">Rastrear Pedido</Link></li>
              <li><Link to="/trocas-e-devolucoes" className="hover:text-white transition-colors">Trocas e Devoluções</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/fale-conosco" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact Details (Text only) */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-6 text-sm">Atendimento</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Seg a Sex: 9h às 18h</li>
              <li className="flex items-center gap-2">
                contato@cavanhaque.com
              </li>
            </ul>

            <div className="mt-8">
              <div className="flex gap-2">
                <div className="bg-white/10 w-10 h-6 rounded"></div>
                <div className="bg-white/10 w-10 h-6 rounded"></div>
                <div className="bg-white/10 w-10 h-6 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Cavanhaque. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido por Gold Line</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
