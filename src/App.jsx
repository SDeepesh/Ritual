import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Nutrition from './pages/Nutrition';
import Gifting from './pages/Gifting';
import ReferFriend from './pages/ReferFriend';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DeliveryArea from './pages/DeliveryArea';
import FunctionalShot from './pages/FunctionalShot';
import StartRitual from './pages/StartRitual';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Layout>
      <ScrollToTop />
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
    </Layout>
  );
}

export default App;
