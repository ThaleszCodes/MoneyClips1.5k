import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '' }) => {
  return (
    <a
      href="https://pay.cakto.com.br/3fj7hmd_428962?affiliate=pEPrDzSJ"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-full max-w-md text-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white font-black uppercase tracking-wider text-lg sm:text-xl py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,0.8)] transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
};

export default CTAButton;
