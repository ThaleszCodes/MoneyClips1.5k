import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/FeatureIcons';

const faqs = [
  {
    question: 'O que eu recebo exatamente?',
    answer: 'Você recebe acesso imediato a uma pasta no Google Drive com mais de 50.000+ vídeos verticais (cortes) em alta definição, prontos para baixar e postar no TikTok, Reels e Shorts. O conteúdo é variado, incluindo cenas de filmes, séries, podcasts, e muito mais.'
  },
  {
    question: 'Como o acesso é entregue?',
    answer: 'Assim que o pagamento for confirmado, você receberá um e-mail da Kiwify com o link de acesso vitalício à pasta com todo o conteúdo. É tudo automático e imediato.'
  },
  {
    question: 'Os vídeos têm alguma marca d\'água?',
    answer: 'Não. Todos os vídeos são limpos, sem qualquer marca d\'água ou logo, prontos para você adicionar sua própria identidade visual se desejar.'
  },
  {
    question: 'O pagamento de R$8,90 é único?',
    answer: 'Sim! É um pagamento único. Você paga uma vez e tem acesso para sempre a todo o pacote, sem mensalidades ou taxas escondidas.'
  },
  {
    question: 'Preciso saber editar vídeos?',
    answer: 'Absolutamente não. A proposta do MoneyClips é justamente economizar seu tempo. Os vídeos já estão prontos e editados no formato ideal. É só baixar e postar.'
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim, 100% seguro. O pagamento é processado pela Kiwify, uma das maiores e mais seguras plataformas de produtos digitais do Brasil, utilizando criptografia de ponta.'
  }
];

const FAQItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-red-900/50 py-5">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold"
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <ChevronDownIcon className={`h-6 w-6 text-red-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-400">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};


const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Perguntas <span className="text-red-500">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Tirando todas as suas dúvidas para você tomar a melhor decisão.
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
