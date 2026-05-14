import React, { useEffect } from 'react';

interface AdUnitProps {
  type: 'display' | 'in-article' | 'sidebar' | 'sticky-bottom';
  className?: string;
  slot?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ type, className = '', slot = '5832562989573758' }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  const getAdStyles = () => {
    switch (type) {
      case 'display':
        return 'min-h-[250px] w-full bg-gray-50 flex items-center justify-center border border-dashed border-gray-200 rounded-xl my-8 overflow-hidden';
      case 'in-article':
        return 'min-h-[280px] w-full bg-brand-light/30 flex items-center justify-center border-y border-brand-gold/10 my-10 overflow-hidden';
      case 'sidebar':
        return 'min-h-[600px] w-full bg-white flex items-center justify-center border border-gray-100 rounded-lg shadow-sm sticky top-24 overflow-hidden';
      case 'sticky-bottom':
        return 'fixed bottom-0 left-0 w-full h-[60px] bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-[100] flex items-center justify-center md:hidden';
      default:
        return 'w-full bg-gray-100';
    }
  };

  return (
    <div className={`ad-unit-container relative ${getAdStyles()} ${className}`} id={`ad-slot-${type}`}>
      {/* Placeholder for development/visual check */}
      <div className="text-[10px] uppercase tracking-widest text-gray-400 absolute top-2 right-2 font-bold pointer-events-none">
        Anúncio Google
      </div>
      
      {/* Google AdSense Code */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-5832562989573758"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdUnit;
