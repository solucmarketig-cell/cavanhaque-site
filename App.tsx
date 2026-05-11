import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import usePageTracking from './services/analytics';

// Lazy loading de páginas para code splitting
import HomePage from './pages/HomePage';
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BeardStylesPage = lazy(() => import('./pages/BeardStylesPage'));
const AccessoriesPage = lazy(() => import('./pages/AccessoriesPage'));
const HairStylesPage = lazy(() => import('./pages/HairStylesPage'));
const KitsPage = lazy(() => import('./pages/KitsPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ManifestoPage = lazy(() => import('./pages/ManifestoPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage'));
const TrackingPage = lazy(() => import('./pages/TrackingPage'));
const ReturnsPage = lazy(() => import('./pages/ReturnsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-brand-dark flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold"></div>
      <p className="mt-4 text-brand-light">Carregando...</p>
    </div>
  </div>
);

// Wrapper component to use hooks inside Router context
function AppContent() {
  // Google Analytics tracking - must be inside Router
  usePageTracking();

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-somos" element={<AboutPage />} />
            <Route path="/manifesto" element={<ManifestoPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
            <Route path="/rastreamento" element={<TrackingPage />} />
            <Route path="/trocas-e-devolucoes" element={<ReturnsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/fale-conosco" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticleDetailPage />} />
            <Route path="/estilos" element={<BeardStylesPage />} />
            <Route path="/cabelo" element={<HairStylesPage />} />
            <Route path="/acessorios" element={<AccessoriesPage />} />
            <Route path="/kits" element={<KitsPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;