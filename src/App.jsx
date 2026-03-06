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
import DeliveryArea from './pages/DeliveryArea';

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
        <Route path="/delivery" element={<DeliveryArea />} />
      </Routes>
    </Layout>
  );
}

export default App;
