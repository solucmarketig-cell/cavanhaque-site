import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consentStatus = localStorage.getItem('cookieConcent');
        if (!consentStatus) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConcent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 transform transition-transform duration-500 ease-in-out bg-brand-dark/95 backdrop-blur-md border-t border-brand-gold/20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto max-w-7xl relative pl-12 pr-12 md:pr-0">
                <Cookie className="absolute left-0 top-1 w-8 h-8 text-brand-gold hidden sm:block" />
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-300 flex-1 leading-relaxed">
                        <p>
                            <strong>Aviso de Cookies e Privacidade:</strong> Utilizamos cookies e tecnologias semelhantes (inclusive do Google AdSense) para personalizar conteúdo, anúncios e analisar nosso tráfego. Ao navegar em nosso site você concorda com essas condições. Leia nossa{' '}
                            <Link to="/politica-de-privacidade" className="text-brand-gold hover:text-white underline underline-offset-2 transition-colors">
                                Política de Privacidade
                            </Link>{' '}
                            para saber mais sobre como seus dados são utilizados de forma segura.
                        </p>
                    </div>

                    <div className="flex flex-shrink-0 gap-3 w-full md:w-auto mt-2 md:mt-0">
                        <button
                            onClick={acceptCookies}
                            className="w-full md:w-auto flex-1 bg-brand-gold hover:bg-yellow-500 text-black font-semibold px-6 py-2.5 rounded shadow-lg shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Aceitar e Continuar
                        </button>
                    </div>
                </div>
                
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute right-0 top-1 p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Fechar"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
