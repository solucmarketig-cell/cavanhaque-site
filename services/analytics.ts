import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics Measurement ID
// Substitua 'G-XXXXXXXXXX' pelo seu ID real do Google Analytics 4
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Declare gtag no window
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

export const initGA = () => {
    // Verifica se já foi inicializado
    if (window.gtag) return;

    // Cria o script do Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Inicializa o dataLayer e gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // Desabilita pageview automático
    });
};

export const logPageView = (url: string) => {
    if (!window.gtag) return;

    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export const logEvent = (action: string, category: string, label?: string, value?: number) => {
    if (!window.gtag) return;

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

// Hook para rastrear mudanças de página
export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        const path = location.pathname + location.search + location.hash;
        logPageView(path);
    }, [location]);
};

export default usePageTracking;
