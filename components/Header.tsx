import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const lowerItem = item.toLowerCase();

    // Blog navigation
    if (lowerItem === 'blog') {
      navigate('/blog');
      setIsMenuOpen(false);
      return;
    }

    // Beard Styles Page navigation
    if (lowerItem === 'barba') {
      navigate('/estilos');
      setIsMenuOpen(false);
      return;
    }

    // Hair Styles Page navigation
    if (lowerItem === 'cabelo') {
      navigate('/cabelo');
      setIsMenuOpen(false);
      return;
    }

    // Kits Page navigation
    if (lowerItem === 'kits') {
      navigate('/kits');
      setIsMenuOpen(false);
      return;
    }

    // Accessories Page navigation
    if (lowerItem === 'acessórios') {
      navigate('/acessorios');
      setIsMenuOpen(false);
      return;
    }

    // Section navigation (Homepage anchors)
    const targetId = lowerItem;

    if (isHome) {
      // If we are already home, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not home, navigate home then scroll
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-brand-gold text-brand-dark text-xs font-bold text-center py-2 px-4 uppercase tracking-widest">
        Frete Grátis para todo Brasil em compras acima de R$ 199
      </div>
      <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-brand-gold transition-colors"
                aria-label="Abrir menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark font-serif font-bold text-xl group-hover:bg-white transition-colors">
                  C
                </div>
                <span className="font-serif text-2xl font-bold tracking-tighter text-white group-hover:text-brand-gold transition-colors">
                  CAVANHAQUE
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['Barba', 'Cabelo', 'Kits', 'Acessórios', 'Blog'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${(item === 'Blog' && location.pathname === '/blog') ||
                      (item === 'Barba' && location.pathname === '/estilos') ||
                      (item === 'Cabelo' && location.pathname === '/cabelo') ||
                      (item === 'Kits' && location.pathname === '/kits') ||
                      (item === 'Acessórios' && location.pathname === '/acessorios')
                      ? 'text-brand-gold'
                      : 'text-gray-300 hover:text-brand-gold'
                    }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-brand-gold transition-colors" aria-label="Pesquisar">
                <Search size={20} />
              </button>
              <button className="relative text-gray-300 hover:text-brand-gold transition-colors" aria-label="Ver carrinho">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-charcoal border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Barba', 'Cabelo', 'Kits', 'Acessórios', 'Blog'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-brand-dark rounded-md cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
