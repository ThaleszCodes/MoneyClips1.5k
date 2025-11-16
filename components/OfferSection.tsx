import React from 'react';
import CTAButton from './CTAButton';

const OfferSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-black to-black opacity-80"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="bg-black/50 border-2 border-red-700 rounded-2xl p-8 sm:p-12 shadow-[0_0_40px_rgba(239,68,68,0.5)] backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-gray-300 mb-2">Oferta Exclusiva de Lançamento</h2>
          <p className="text-lg text-red-400 mb-6">Acesso Imediato e Vitalício por Apenas:</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-6xl sm:text-8xl font-black text-white leading-none">R$29,90</span>
            <span className="text-2xl sm:text-4xl font-bold text-gray-500 line-through">R$297</span>
          </div>
          <p className="font-semibold text-white mb-8">Pagamento único. Sem mensalidades.</p>
          <CTAButton>GARANTIR MEU ACESSO AGORA</CTAButton>
          <p className="mt-6 text-sm text-gray-400">Ambiente 100% seguro. Compra processada pela Cakto.</p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
