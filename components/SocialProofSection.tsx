import React from 'react';

const testimonials = [
  {
    name: 'João P., Dono de Página de Motivação',
    quote: 'Em uma semana, meu engajamento triplicou. Os vídeos são de altíssima qualidade e o público ama. Recomendo demais!'
  },
  {
    name: 'Mariana S., Criadora de Conteúdo de Lifestyle',
    quote: 'O MoneyClips salvou meu calendário de conteúdo. É só baixar e postar, simples assim. Minha página nunca cresceu tão rápido!'
  },
  {
    name: 'Carlos A., Afiliado Digital',
    quote: 'Uso os clipes para aquecer minhas contas de anúncio e o resultado é absurdo. O custo-benefício desse pacote é imbatível.'
  }
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Não acredite apenas em nós. <span className="text-red-500">Veja quem já está crescendo.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/60 border border-red-900/50 p-6 rounded-lg flex flex-col">
              <p className="text-gray-300 italic mb-4 flex-grow">"{testimonial.quote}"</p>
              <p className="font-bold text-red-400">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
