import React from 'react';
import CTAButton from './CTAButton';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/60 via-black to-black opacity-80"></div>
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-red-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-red-800/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">MoneyClips 1500+</span>
          <br />
          A Máquina de Conteúdo Que Monetiza por Você
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Mais de 1500 cortes virais prontos de filmes, séries, famosos e conteúdo milionário para você postar e crescer rápido.
        </p>
        <CTAButton>Quero Acessar Agora</CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
