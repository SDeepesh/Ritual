import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const OurStory = lazy(() => import('./pages/OurStory'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const Gifting = lazy(() => import('./pages/Gifting'));
const ReferFriend = lazy(() => import('./pages/ReferFriend'));
const Corporate = lazy(() => import('./pages/Corporate'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const DeliveryArea = lazy(() => import('./pages/DeliveryArea'));
const FunctionalShot = lazy(() => import('./pages/FunctionalShot'));
const StartRitual = lazy(() => import('./pages/StartRitual'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const Admin = lazy(() => import('./pages/Admin'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-sage/20 border-t-brand-sage rounded-full animate-spin"></div>
  </div>
);

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/gifting" element={<Gifting />} />
            <Route path="/refer" element={<ReferFriend />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/delivery" element={<DeliveryArea />} />
            <Route path="/functional-shots" element={<FunctionalShot />} />
            <Route path="/start-ritual" element={<StartRitual />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/ritual-admin-auth" element={<AdminLogin />} />
            <Route 
              path="/ritual-admin-vault" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Suspense>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
