import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black border-2 border-red-900/70 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center text-center md:text-left gap-8 shadow-[0_0_25px_rgba(239,68,68,0.2)]">
          <div className="flex-shrink-0">
            <img src="https://i.imgur.com/UiFSKoI.png" alt="Selo de Garantia de 7 Dias" className="h-36 w-36 sm:h-44 sm:w-44" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-3">
              Risco Zero Para Você
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-gray-300 text-lg">
              Sua satisfação é nossa prioridade máxima. Se por qualquer motivo você não ficar 100% satisfeito com o MoneyClips 50k+, basta nos enviar um único e-mail dentro de 7 dias após a compra e nós devolveremos todo o seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
