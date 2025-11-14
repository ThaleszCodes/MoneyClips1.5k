import React from 'react';
import { CheckIcon } from './icons/FeatureIcons';

const categories = [
  'Cortes de filmes',
  'Cortes de séries',
  'Cortes de celebridades e podcasts',
  'Cortes motivacionais',
  'Lifestyle milionário',
  'Momentos virais e trechos de impacto'
];

const WhatYouGetSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/80 via-black to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            O que você recebe no <span className="text-red-500">acesso imediato</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Um arsenal completo de conteúdo viral, organizado e pronto para postar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center p-3">
              <CheckIcon className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-200">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
