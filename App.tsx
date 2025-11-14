import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import OfferSection from './components/OfferSection';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import GuaranteeSection from './components/GuaranteeSection';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <main>
        <HeroSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <SocialProofSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;