import React from 'react';
import { VideoCameraIcon, TrendingUpIcon, DevicePhoneMobileIcon, CurrencyDollarIcon, PlayIcon, RocketLaunchIcon } from './icons/FeatureIcons';

const benefits = [
  {
    icon: <VideoCameraIcon />,
    title: 'Mais de 1500 Vídeos Prontos',
    description: 'Acesso a uma biblioteca massiva de conteúdo de alta qualidade.'
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Conteúdo Viral Selecionado',
    description: 'Clipes escolhidos a dedo pelo potencial de viralização.'
  },
  {
    icon: <DevicePhoneMobileIcon />,
    title: 'Ideal para TikTok, Reels e Shorts',
    description: 'Formatos perfeitos para as plataformas que mais crescem.'
  },
  {
    icon: <CurrencyDollarIcon />,
    title: 'Perfeito para Perfis Milionários',
    description: 'Estética de luxo e sucesso para atrair o público certo.'
  },
  {
    icon: <PlayIcon />,
    title: 'Plug & Play',
    description: 'É simples: baixe, poste e veja a mágica acontecer.'
  },
  {
    icon: <RocketLaunchIcon />,
    title: 'Crescimento Acelerado',
    description: 'Ideal para páginas novas que precisam de um impulso inicial.'
  }
];

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-gray-900/50 border border-red-900/70 p-6 rounded-xl transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:-translate-y-2">
        <div className="flex items-center mb-4">
            <div className="text-red-500 mr-4">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
    </div>
);


const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Por que o <span className="text-red-500">MoneyClips 1500+</span> é um atalho para o sucesso?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Deixe o trabalho pesado de lado. Foco total em monetizar e crescer sua audiência com conteúdo que já funciona.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
